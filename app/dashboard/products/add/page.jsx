import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input name="price" placeholder="price" type="number" />
        <input name="stock" placeholder="stock" type="number" />
        <input name="color" placeholder="color" type="text" />
        <input name="size" placeholder="size" type="text" />
        <textarea
          name="desc"
          id="desc"
          placeholder="description"
          rows={16}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
