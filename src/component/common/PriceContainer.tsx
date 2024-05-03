import styles from "./PriceContainer.module.css";

interface Props {
  price: string;
  priceSign: string;
}
const PriceContainer = ({price, priceSign}: Props) => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.circle} />
      <h2 className={styles.priceText}>{price}{priceSign}</h2>
    </div>
  );
};

export default PriceContainer;
