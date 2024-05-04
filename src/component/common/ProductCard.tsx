import { Link } from "react-router-dom";
import { Product } from "../../pages/HomePage";
import PriceContainer from "./PriceContainer";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { increament } from "../state/favoriteSlice";
import { MdFavorite, MdFavoriteBorder, MdShoppingBasket } from "react-icons/md";
import useCartItems from "../../hooks/useCartItems";
import { addToList, updateQuantity } from "../state/cartSlice";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  let { quantity, setQuantity, cartItem } = useCartItems(product);

  const cartUpdate = () => {
    if (cartItem) {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity,
        })
      );
    } else {
      dispatch(addToList({ product, quantity }));
    }
  };
  const handleIncreamentQuantity = () => {
    setQuantity((quantity += 1));
    cartUpdate();
  };
  const handleDecreamentQuantity = () => {
    setQuantity((quantity -= 1));
    cartUpdate();
  };

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
        <div className={styles.cart}>
          {quantity <= 0 ? (
            <MdShoppingBasket size={25} onClick={handleIncreamentQuantity} />
          ) : (
            <div className={styles.cartBtnContainer}>
              <div className={styles.btnContainer}>
                <button onClick={handleDecreamentQuantity}>-</button>
                <p>{quantity}</p>
                <button onClick={handleIncreamentQuantity}>+</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
