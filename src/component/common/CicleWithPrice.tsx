import styles from "./CicleWithPrice.module.css";

interface Props {
  price: number;
  priceSub?: string;
  circleStyle?: string;
  priceContainerStyle?: string;
}
const CicleWithPrice = ({
  circleStyle,
  priceContainerStyle,
  price,
  priceSub,
}: Props) => {
  return (
    <div className={`${styles.circle} ${circleStyle}`}>
      <div className={`${styles.priceContainer} ${priceContainerStyle}`}>
        <h1 className={styles.priceTitle}>{price}€</h1>
        <p className={styles.pricePerItem}>{priceSub ? priceSub : "per set"}</p>
      </div>
    </div>
  );
};

export default CicleWithPrice;
