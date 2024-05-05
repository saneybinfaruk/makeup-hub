import { Link } from "react-router-dom";
import { Product } from "../../pages/HomePage";
import PriceContainer from "./PriceContainer";
import styles from "./ProductCard.module.css";
import { MdFavorite, MdFavoriteBorder, MdShoppingBasket } from "react-icons/md";
import useCartItems from "../../hooks/useCartItems";
import useFavorite from "../../hooks/useFavorite";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  let { quantity, handleIncreamentQuantity, handleDecreamentQuantity } =
    useCartItems(product);

  let { favorite, handleSetFavorite } = useFavorite(product);

  return (
    <div className={styles.container}>
      {/* Favorite Container */}
      <div className={styles.favoriteContainer}>
        <div className={styles.favorite} onClick={handleSetFavorite}>
          {favorite ? (
            <MdFavorite color={"red"} size={22} />
          ) : (
            <MdFavoriteBorder size={22} />
          )}
        </div>

        {product.discount && (
          <div className={styles.discountContainer}>
            <span className={styles.dots} />
            <p className={styles.discountText}>-15%</p>
          </div>
        )}
      </div>

      {/* Details Container */}
      <section className={styles.detailsContainer}>
        <img src={product.api_featured_image} className={styles.productImage} />
        <h4 className={styles.productCategorie}>{product.brand}</h4>
        <Link to={`/products/${product.id}`} className={styles.productName}>
          {product.name}
        </Link>
      </section>

      {/* Cart Container */}
      <div className={styles.cartContainer}>
        <PriceContainer price={product.price} priceSign={product.price_sign} />
        <div className={styles.cart}>
          {quantity <= 0 ? (
            <MdShoppingBasket size={25} onClick={handleIncreamentQuantity} />
          ) : (
            <div className={styles.btnContainer}>
              <button onClick={handleDecreamentQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={handleIncreamentQuantity}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
