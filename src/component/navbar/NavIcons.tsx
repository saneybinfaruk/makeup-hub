import { ReactNode } from "react";
import styles from "./NavIcons.module.css";

interface Props {
  iconName: string;
  countTextVisibility?: boolean;
  iconBackgroundStyle?: string;
  iconStyle?: string;
  children: ReactNode;
}
const NavIcons = ({ 
  children,
  iconBackgroundStyle,
  iconStyle,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={`${iconBackgroundStyle} ${styles.iconBackground}`} />
        <div className={`${styles.iconStyle}  ${iconStyle}`}>{children}</div> 
      </div>
    </div>
  );
};

export default NavIcons;
