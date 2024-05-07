import styles from "./ProductBanner.module.css";
import useProduct from "../../hooks/useProduct";
import { Product } from "../../pages/HomePage";

const ProductBanner = () => {
  const { data } = useProduct("740");
  if (!data) return null;
  const { name, api_featured_image, brand, product_type } = data as Product;

  return typeof data === "string" ? (
    <h4 className={styles.errorMessage}>{data}</h4>
  ) : (
    <section className={styles.container}>
      <div className={styles.itemContainer}>
        <h1>{name}</h1>
        <h4 className={styles.link}>
          {brand} / {product_type}
        </h4>
      </div>

      <img src={api_featured_image} />
    </section>
  );
};

export default ProductBanner;
