import styles from "./ProductsCartPage.module.css";
import ProductCartLayout from "../component/common/ProductCartLayout";
import { useSelector } from "react-redux";
import { RootState } from "../component/state/store";
import useCartItems from "../hooks/useCartItems";

const ProductsCartPage = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartList);

  

  return (
    <section className={styles.container}>
      <section className={styles.cartsProduct}>
        <div className={styles.headerContainer}>
          <h3>My Cart(0)</h3>
          <span className={styles.line} />
        </div>

        <div>
          {cartItems.map((item, index) => (
            <section key={index}>
              {index > 0 && <span className={styles.line} />}
              <ProductCartLayout cartItem={item} />
            </section>
          ))}
        </div>
      </section>
      <section className={styles.productsPaymentContainer}>
        <h3>Order Summary</h3>
        <span className={styles.line} />

        <section className={styles.paymentSum}>
          <h4>Cart Subtotal</h4>
          <div className={styles.subContainer}>
            <p>Subtotal</p>
            <h4>$ 785684</h4>
          </div>
          <div className={styles.subContainer}>
            <p>Shiping</p>
            <h4>$ 15</h4>
          </div>
          <span className={styles.line} />
          <div className={styles.subContainer}>
            <h1>Total</h1>
            <h4>$ 589564</h4>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ProductsCartPage;
