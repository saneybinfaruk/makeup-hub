import styles from "./CartButton.module.css";

type Props = {
  count: string;
};
const CartButton = ({ count }: Props) => {
  return (
    <div className={styles.btnContainer}>
      <button onClick={() => {}}>-</button>
      <p>{count}</p>
      <button onClick={() => {}}>+</button>
    </div>
  );
};

export default CartButton;
