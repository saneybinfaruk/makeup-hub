import styles from "./CircleWithPrice.module.css";

interface Props {
  price: string;
  priceSign: string;
  priceSub?: string;
  circleStyle?: string;
  priceContainerStyle?: string;
}
const CircleWithPrice = ({
  circleStyle,
  priceContainerStyle,
  price,
  priceSign,
  priceSub,
}: Props) => {
  return (
    <div className={` ${circleStyle} ${styles.circle}`}>
      <div className={`${styles.priceContainer} ${priceContainerStyle}`}>
        <h1 className={styles.priceTitle}>
          {price === null ? "0" : price} {priceSign === null ? "$" : priceSign}
        </h1>
        <p className={styles.pricePerItem}>{priceSub ? priceSub : "per set"}</p>
      </div>
    </div>
  );
};

export default CircleWithPrice;
