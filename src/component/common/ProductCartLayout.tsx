import styles from "./ProductCartLayout.module.css";
import PriceContainer from "./PriceContainer";
import CartButton from "./CartButton";
import { CartItem, updateQuantity } from "../state/cartSlice";
import useCartItems from "../../hooks/useCartItems";
import { useDispatch } from "react-redux";

interface Props {
  cartItem: CartItem;
}

const ProductCartLayout = ({ cartItem: { product } }: Props) => {
  let { handleIncreamentQuantity, handleDecreamentQuantity, quantity } =
    useCartItems(product);

  return (
    <section className={styles.container}>
      <img src={product?.api_featured_image} />

      <div className={styles.detailsContainer}>
        <h4>{product?.name}</h4>
        <div className={styles.brandContainer}>
          <h6>Sold by: </h6>
          <h5>{product?.brand}</h5>
        </div>
      </div>

      <section className={styles.priceContainer}>
        <PriceContainer
          price={product?.price}
          priceSign={product?.price_sign}
        />
      </section>

      <section className={styles.btnContainer}>
        <CartButton
          quantity={quantity}
          increamentQuantity={handleIncreamentQuantity}
          decreamentQuantity={handleDecreamentQuantity}
        />
        <button className={styles.removeBtn}>Remove</button>
      </section>
    </section>
  );
};

export default ProductCartLayout;
