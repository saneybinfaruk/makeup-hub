import { MdFavorite } from "react-icons/md";
import styles from "./FavoriteProductsPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../component/state/store";
import ProductCard from "../component/common/ProductCard";

const FavoriteProductsPage = () => {
  const { favoriteList } = useSelector((state: RootState) => state.favorite);

  return (
    <div>
      {favoriteList.length <= 0 && (
        <section className={styles.emptyContainer}>
          <MdFavorite size={35} color="red" />
          <h3>Empty Favorite List</h3>
        </section>
      )}

      <section className={styles.productsContainer}>
        {favoriteList.map((f) => (
          <ProductCard product={f.product} key={f.product.id} />
        ))}
      </section>
    </div>
  );
};

export default FavoriteProductsPage;
