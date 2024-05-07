import { BsCartCheck, BsChatLeftHeart } from "react-icons/bs";
import styles from "./InfoSection2.module.css";
import IconInfo from "../common/IconInfo";

import { LiaCommentDollarSolid } from "react-icons/lia";

const InfoSection2 = () => {
  return (
    <section className={styles.container}>
      <IconInfo
        heading="Delivery"
        children={<BsCartCheck size={35} />}
        iconBackgroundStyle={styles.iconBackgroundStyle}
      />
      <IconInfo
        heading="Products"
        children={<BsChatLeftHeart size={35} />}
        iconBackgroundStyle={styles.iconBackgroundStyle}
      />
      <IconInfo
        heading="Payments"
        children={<LiaCommentDollarSolid size={35} />}
        iconBackgroundStyle={styles.iconBackgroundStyle}
      />
    </section>
  );
};

export default InfoSection2;
