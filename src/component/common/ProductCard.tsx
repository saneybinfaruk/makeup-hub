import { Link } from "react-router-dom";
import { Product } from "../../pages/HomePage";
import PriceContainer from "./PriceContainer";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { increament } from "../state/favoriteSlice";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.favoriteContainer}>
        <div className={styles.favorite} onClick={() => dispatch(increament())}>
          {product.favorite === 0 ? (
            <MdFavoriteBorder size={22} />
          ) : (
            <MdFavorite size={22} />
          )}
        </div>

        {product.discount && (
          <div className={styles.discountContainer}>
            <span className={styles.dots} />
            <p className={styles.discountText}>-15%</p>
          </div>
        )}
      </div>
      <img src={product.api_featured_image} className={styles.productImage} />
      <h4 className={styles.productCategorie}>{product.brand}</h4>
      <Link to={`/products/${product.id}`} className={styles.productName}>
        {product.name}
      </Link>
      <div className={styles.cartContainer}>
        <PriceContainer price={product.price} priceSign={product.price_sign} />
        <span className={`${styles.cart} ${"material-symbols-outlined"}`}>
          shopping_basket
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
