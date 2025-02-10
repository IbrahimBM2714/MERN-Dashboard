import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

export const addUser = async (formData) => {
    "use server"
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    console.log(formData)

    try {
        connectToDB()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        })

        await newUser.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to insert user")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async (formData) => {
    "use server"
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

    console.log(formData)

    try {
        connectToDB()

        const updatedFields = {
            username, email, password, phone, address, isAdmin, isActive
        }


        Object.keys(updatedFields).forEach(
            (key) =>
                (updatedFields[key] === "" || undefined) && delete updatedFields[key]
        );

        console.log(updatedFields)
        await User.findByIdAndUpdate(id, updatedFields)

        console.log("SUCCESS!!")

    } catch (error) {
        console.log("ERROR IN UPDATE USER")
        throw new Error("Failed to insert user")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData)

    console.log(formData)

    try {
        connectToDB()
        await User.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete user")
    }

    revalidatePath("/dashboard/users")
}

export const addProduct = async (formData) => {
    "use server"
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData)

    console.log(formData)

    try {
        connectToDB()

        const newProduct = new Product({
            title, desc, price, stock, color, size
        })

        await newProduct.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to insert product")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const updateProduct = async (formData) => {
    "use server"
    const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData)

    console.log(`\n\nPRODUCT: `)
    console.log(formData)
    console.log("\n\n")

    try {
        connectToDB()

        const updatedFields = {
            title, desc, price, stock, color, size
        }


        Object.keys(updatedFields).forEach(
            (key) =>
                (updatedFields[key] === "" || undefined) && delete updatedFields[key]
        );

        console.log(updatedFields)
        await Product.findByIdAndUpdate(id, updatedFields)

        console.log("SUCCESS!!")

    } catch (error) {
        console.log("ERROR IN UPDATE USER")
        throw new Error("Failed to insert user")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData)

    console.log(formData)

    try {
        connectToDB()
        await Product.findByIdAndDelete(id)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete product")
    }

    revalidatePath("/dashboard/products")
}