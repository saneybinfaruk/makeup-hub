import styles from "./IconInfo.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  heading: string;
  iconBackgroundStyle: string;
}
const IconInfo = ({ heading, children }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.iconContainer}>
          <div className={styles.iconBackgroundStyle} />
          <div className={styles.icon}>{children}</div>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconInfo;
