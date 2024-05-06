import { memo } from "react";
import styles from "./CustomButton.module.css";
interface Props {
  title: string;
  buttonBackgroundColor?: string;
  titleColor?: string;
  width?: string;
  height?: string;
  onSelect: () => void;
}
const CustomButton = ({
  title,
  titleColor,
  buttonBackgroundColor,
  width,
  height,
  onSelect,
}: Props) => {
  return (
    <button
      onClick={onSelect}
      type="button"
      className={styles.button}
      style={{
        backgroundColor: buttonBackgroundColor,
        color: titleColor,
        width,
        height,
      }}
    >
      {title}
    </button>
  );
};

export default memo(CustomButton);
