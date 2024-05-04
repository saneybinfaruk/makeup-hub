import styles from "./CartButton.module.css";

type Props = {
  quantity: number;
  increamentQuantity: () => void;
  decreamentQuantity: () => void;
};
const CartButton = ({
  quantity,
  increamentQuantity,
  decreamentQuantity,
}: Props) => {
  return (
    <div className={styles.btnContainer}>
      <button onClick={decreamentQuantity} disabled={quantity <= 0}>
        -
      </button>
      <p>{quantity}</p>
      <button onClick={increamentQuantity}>+</button>
    </div>
  );
};

export default CartButton;
