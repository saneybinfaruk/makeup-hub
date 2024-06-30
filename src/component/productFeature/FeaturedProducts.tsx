import FeaturedProductBig from "./FeaturedProductBig";
import FeaturedProductSmall from "./FeaturedProductSmall";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <FeaturedProductSmall />
      </div>

      <div className={styles.right}>
        <FeaturedProductBig />
      </div>
    </div>
  );
};

export default FeaturedProducts;
