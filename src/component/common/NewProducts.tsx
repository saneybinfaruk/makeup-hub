import CicleWithPrice from "./CicleWithPrice";
import HeadingButton from "./HeadingButton";
import styles from "./NewProduct.module.css";
import NewProductSmall from "./NewProductSmall";
import productBigImage from "../../assets/productImageBig.png";

const NewProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NewProductSmall />
      </div>
      <div className={styles.right}>
        <div className={styles.headingContainer}>
          <HeadingButton
            heading="Beauty has a purpose, and purpose is you."
            buttonBackgroundColor="#000"
            buttonTitleColor="#fff"
          />
        </div>

        <CicleWithPrice
          price={184.99}
          circleStyle={styles.circleContainer}
          priceContainerStyle={styles.priceContainerStyle}
        />

        <img src={productBigImage} className={styles.image} />
      </div>
    </div>
  );
};

export default NewProducts;
