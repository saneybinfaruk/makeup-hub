import styles from "./ProductDetails.module.css";
import { FaHeart } from "react-icons/fa6";
import PriceContainer from "./PriceContainer";
import CustomButton from "./CustomButton";
import { Product } from "../../pages/HomePage";
import Spinner from "./Spinner";
import CartButton from "./CartButton";
import useCartItems from "../../hooks/useCartItems";

interface Props {
  product: Product;
  isLoading: boolean;
}
const ProductDetails = ({ product, isLoading }: Props) => {
  let { quantity, handleIncreamentQuantity, handleDecreamentQuantity } =
    useCartItems(product);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>{product?.name}</h2>
        <p>{product?.product_type}</p>
      </div>

      <section className={styles.productSection}>
        <div className={styles.imageSection}>
          <img src={product?.api_featured_image} className={styles.mainImage} />
        </div>

        <div className={styles.productDetails}>
          <div className={styles.favoriteBtnContainer}>
            <button className={styles.favoriteBtn}>
              <FaHeart />
              add to favorite
            </button>
          </div>

          <h6>{product?.brand}</h6>
          <p>{product?.name}</p>

          <section className={styles.priceContainer}>
            <PriceContainer
              price={product?.price}
              priceSign={product?.price_sign}
            />

            <CartButton
              quantity={quantity}
              increamentQuantity={handleIncreamentQuantity}
              decreamentQuantity={handleDecreamentQuantity}
            />

            <CustomButton
              title="add to basket"
              width="200px"
              height="52px"
              onSelect={handleIncreamentQuantity}
            />
          </section>

          <section className={styles.detailsSection}>
            <h6>Description </h6>
            <p>{product?.description?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
