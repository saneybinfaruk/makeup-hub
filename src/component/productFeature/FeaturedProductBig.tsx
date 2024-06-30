import useProduct from "../../hooks/useProduct";
import { Product } from "../../pages/HomePage";
import CircleWithPrice from "../common/CircleWithPrice";
import HeadingButton from "../common/HeadingButton";
import Spinner from "../common/Spinner";
import styles from "./FeaturedProductBig.module.css";

const FeaturedProductBig = () => {
  const { data, isLoading } = useProduct("623");
  if (!data) return null;
  const { id, name, api_featured_image, price, price_sign } = data as Product;

  return typeof data === "string" ? (
    <h4 className={styles.errorMessage}>{data}</h4>
  ) : isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      
      <div className={styles.headingContainer}>
        <HeadingButton
          heading={name}
          buttonBackgroundColor="#000"
          buttonTitleColor="#fff"
          id={id.toString()}
        />
      </div>

      <CircleWithPrice
        price={price}
        priceSign={price_sign}
        circleStyle={styles.circleStyle}
        priceContainerStyle={styles.priceContainerStyle}
      />

      <img src={api_featured_image} className={styles.productImage} />

    </div>
  );
};

export default FeaturedProductBig;
