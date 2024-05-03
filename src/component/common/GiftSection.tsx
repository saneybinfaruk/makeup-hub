import styles from "./GiftSection.module.css";
import CustomButton from "./CustomButton";
import giftBoxImage from "../../assets/gift.png";

const GiftSection = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.gitBoxImageContainer}>
        <div className={styles.bigWhiteCircle} />
        <img src={giftBoxImage} />
      </div>

      <div className={styles.itemContainer}>
        <h1>We have something for you!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to.
        </p>
        <input type="text" placeholder="Your email" />

        <CustomButton
          title="subscribe"
          buttonBackgroundColor="#000"
          titleColor="#fff"
        />
      </div>
      <div className={styles.smallWhiteCircle} />
    </section>
  );
};

export default GiftSection;
