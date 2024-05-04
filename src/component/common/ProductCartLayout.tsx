import styles from "./ProductCartLayout.module.css";
import PriceContainer from "./PriceContainer";
import CartButton from "./CartButton";
import { CartItem, updateQuantity } from "../state/cartSlice";
import useCartItems from "../../hooks/useCartItems";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  cartItem: CartItem;
}

const ProductCartLayout = ({ cartItem: { product, quantity } }: Props) => {
  const { setQuantity: storeQuantity, cartItem } = useCartItems(product);
  let [currentQuantity, setQuantity] = useState(quantity);

  const handleIncreamentQuantity = () => {
    setQuantity((currentQuantity += 1));
    storeQuantity(currentQuantity);
    cartUpdate();
  };

  const handleDecreamentQuantity = () => {
    setQuantity((currentQuantity -= 1));
    storeQuantity(currentQuantity);
    cartUpdate();
  };
  const dispatch = useDispatch();

  const cartUpdate = () => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: currentQuantity,
      })
    );
  };

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
          quantity={currentQuantity}
          increamentQuantity={handleIncreamentQuantity}
          decreamentQuantity={handleDecreamentQuantity}
        />
        <button className={styles.removeBtn}>Remove</button>
      </section>
    </section>
  );
};

export default ProductCartLayout;
