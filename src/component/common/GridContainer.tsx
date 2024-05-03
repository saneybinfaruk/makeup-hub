import { Product } from "../../pages/HomePage";
import styles from "./GridContainer.module.css";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const GridContainer = ({
  datas,
  isLoading,
}: {
  datas: Product[];
  isLoading: boolean;
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.gridContainer}>
      {datas?.length === 0 ? (
        <p className={styles.loading}>Sorry, no product found</p>
      ) : (
        datas?.map((data) => <ProductCard key={data.id} product={data} />)
      )}
    </div>
  );
};

export default GridContainer;
