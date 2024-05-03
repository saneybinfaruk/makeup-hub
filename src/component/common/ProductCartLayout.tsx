import image from "../../assets/carouselImage1.png";
import styles from "./ProductCartLayout.module.css";
import PriceContainer from "./PriceContainer";
import CartButton from "./CartButton";

const ProductCartLayout = () => {
  return (
    <section className={styles.container}>
      <img src={image} />

      <div className={styles.detailsContainer}>
        <h4>name</h4>
        <div className={styles.brandContainer}>
          <h6>Sold by: </h6>
          <h5>dddddd</h5>
        </div>
      </div>

      <section className={styles.priceContainer}>
        <PriceContainer price="56000" priceSign="$" />
      </section>

      <section className={styles.btnContainer}>
        <CartButton count="12" />
        <button className={styles.removeBtn}>Remove</button>
      </section>
    </section>
  );
};

export default ProductCartLayout;
