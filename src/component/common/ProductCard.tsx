import { Link } from "react-router-dom";
import { Product } from "../../pages/HomePage";
import PriceContainer from "./PriceContainer";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  product: {
    id,
    name,
    brand,
    product_type,
    price,
    price_sign,
    image_link,
    discount,
    api_featured_image,
  },
}: {
  product: Product;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.favoriteContainer}>
        <span className={`${styles.favorite} ${"material-symbols-outlined"}`}>
          favorite
        </span>

        {discount && (
          <div className={styles.discountContainer}>
            <span className={styles.dots} />
            <p className={styles.discountText}>-15%</p>
          </div>
        )}
      </div>
      <img src={api_featured_image} className={styles.productImage} />
      <h4 className={styles.productCategorie}>{brand}</h4>
      <Link to={`/products/${id}`} className={styles.productName}>
        {name}
      </Link>
      <div className={styles.cartContainer}>
        <PriceContainer price={price} priceSign={price_sign} />
        <span className={`${styles.cart} ${"material-symbols-outlined"}`}>
          shopping_basket
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
