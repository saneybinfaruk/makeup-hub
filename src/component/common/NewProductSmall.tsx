import CicleWithPrice from "./CicleWithPrice";
import HeadingButton from "./HeadingButton";
import styles from "./NewProductSmall.module.css";
import productImage from "../../assets/carouselImage1.png";

const NewProductSmall = () => {
  return (
    <div>
      <HeadingButton heading="Natural and ecological beauty solutions for you!" />
      <CicleWithPrice price="24,99" circleStyle={styles.cicle} />
      <img src={productImage} className={styles.image} />
    </div>
  );
};

export default NewProductSmall;
