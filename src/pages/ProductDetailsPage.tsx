import { useParams } from "react-router-dom";
import ProductDetails from "../component/common/ProductDetails";
import useProduct from "../hooks/useProduct";
import { Product } from "./HomePage";
import InfoSection2 from "../component/infoSection/InfoSection2";
import GridContainer from "../component/common/GridContainer";
import useSuggestedProduct from "../hooks/useSuggestedProduct";
import styles from "./ProductDetailsPage.module.css";
import { useEffect } from "react";
import PromotionalProduct from "../component/productFeature/PromotionalProduct";
import getRandomItems from "../utility/GetRandomItem";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useProduct(id as string);

  const { data: suggested, isLoading: suggestedIsLoading } =
    useSuggestedProduct(data as Product);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <section className={styles.container}>
      {typeof data === "string" ? (
        <h1 className={styles.errorMessage}>{data}</h1>
      ) : (
        <ProductDetails product={data as Product} isLoading={isLoading} />
      )}
      <InfoSection2 />
      <section className={styles.forYouContainer}>
        <h1>For you</h1>
        <GridContainer
          datas={getRandomItems((suggested as Product[]) || [], 4)}
          isLoading={suggestedIsLoading}
        />
      </section>

      <PromotionalProduct id="1044" />
    </section>
  );
};

export default ProductDetailsPage;
