import HeadingButton from "../common/HeadingButton";
import styles from "./PromotionalProduct.module.css";
import useProduct from "../../hooks/useProduct";
import CircleWithPrice from "../common/CircleWithPrice";
import Spinner from "../common/Spinner";
import { Product } from "../../pages/HomePage";

const PromotionalProduct = ({ id }: { id: string }) => {
  const { data, isLoading } = useProduct("1042");

  if (!data) return null;
  const { name, api_featured_image, price, price_sign } = data as Product;

  return typeof data === "string" ? (
    <h4 className={styles.errorMessage}>{data}</h4>
  ) : isLoading ? (
    <Spinner />
  ) : (
    <section className={styles.container}>
      <div className={styles.left}>
        <HeadingButton
          heading={name!}
          buttonBackgroundColor="#000"
          buttonTitleColor="#fff"
          id={id.toString()}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={api_featured_image!} />
          <CircleWithPrice
            price={price === null ? "0" : price}
            priceSign={price_sign === null ? "$" : price_sign}
            circleStyle={styles.circleContainer}
            priceContainerStyle={styles.priceContainerStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalProduct;
