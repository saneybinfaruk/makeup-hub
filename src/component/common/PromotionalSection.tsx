import HeadingButton from "./HeadingButton";
import styles from "./PromotionalSection.module.css";
import promotionalImage from "../../assets/Screenshot 2024-03-30 at 8.35.18 AM.png";
import CicleWithPrice from "./CicleWithPrice";

const PromotionalSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <HeadingButton
          heading={`Be natural, be beautiful, be you.`}
          buttonBackgroundColor="#000"
          buttonTitleColor="#fff"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={promotionalImage} />
          <CicleWithPrice
            price={84.99}
            circleStyle={styles.circleContainer}
            priceContainerStyle={styles.priceContainerStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
