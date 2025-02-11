import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt"

const login = async (credentials) => {
    console.log("\n\nCREDENTIALS")
    console.log(credentials)
    console.log("\n\n")
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });

        if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

        // const isPasswordCorrect = await bcrypt.compare(
        //     credentials.password,
        //     user.password
        // );

        if (user.password === credentials.password) {
            isPasswordCorrect = true
        } else { isPasswordCorrect = false; }

        if (!isPasswordCorrect) throw new Error("Wrong credentials!");

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};



export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                console.log("\n\nCREDENTIALS")
                console.log(credentials)
                console.log("\n\n")
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],

});