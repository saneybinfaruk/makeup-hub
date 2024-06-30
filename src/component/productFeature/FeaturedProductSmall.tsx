import useProduct from "../../hooks/useProduct";
import { Product } from "../../pages/HomePage";
import CircleWithPrice from "../common/CircleWithPrice";
import HeadingButton from "../common/HeadingButton";
import Spinner from "../common/Spinner";
import styles from "./FeaturedProductSmall.module.css";

const FeaturedProductSmall = () => {
  const { data, isLoading } = useProduct("1043");

  if (!data) return null;

  const { id, name, api_featured_image, price, price_sign } = data as Product;

  return typeof data === "string" ? (
    <h4 className={styles.errorMessage}>{data}</h4>
  ) : isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      <HeadingButton heading={name} id={id.toString()} />
      <CircleWithPrice
        price={price}
        circleStyle={styles.cicle}
        priceSign={price_sign}
      />
      <img src={api_featured_image} className={styles.image} />
    </div>
  );
};

export default FeaturedProductSmall;
