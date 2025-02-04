import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Address</label>
          <textarea type="text" name="address" rows={3} placeholder="Address" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={5} placeholder="Description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
