import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = async ({ params }) => {
  const { id } = params;

  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Description</label>
          <textarea name="desc" id="desc" rows={5} placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
