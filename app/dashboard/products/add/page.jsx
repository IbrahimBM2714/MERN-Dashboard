import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input name="price" placeholder="price" type="number" />
        <input name="stock" placeholder="stock" type="number" />
        <input name="color" placeholder="color" type="text" />
        <input name="size" placeholder="size" type="text" />
        <textarea name="desc" id="desc" placeholder="description" rows={16}></textarea>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
