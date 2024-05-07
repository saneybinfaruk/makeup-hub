import { useCallback, useEffect, useState } from "react";
import ProductBanner from "../component/productFeature/ProductBanner";
import CategorieContainer from "../component/common/CategorieContainer";
import useProductTypes from "../hooks/useProductTypes";
import useProductSort from "../hooks/useProductSort";
import useProductPagination from "../hooks/useProductPagination";
import Pagination from "../component/pagination/Pagination";
import { Product } from "./HomePage";
import FeaturedProducts from "../component/productFeature/FeaturedProducts";
import styles from "./ProductsPage.module.css";
import InfoSection2 from "../component/infoSection/InfoSection2";

const ProductsPage = () => {
  const { data, isLoading } = useProductTypes();

  const [products, setProducts] = useState<Product[]>([]);

  const { setSort, sort, sortedProducts } = useProductSort(
    products as Product[]
  );
  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    slicedProducts,
  } = useProductPagination(sortedProducts);

  const handleSelectItemsPerPage = useCallback((value: number) => {
    setItemsPerPage(value);
  }, []);

  const handleSetSort = useCallback((value: string) => {
    setSort(value);
  }, []);

  const handleOnItemSelect = useCallback((value: number) => {
    setCurrentPage(value);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    if (!isLoading) {
      setProducts(data as Product[]);
    }
    setCurrentPage(1);
  }, [data, sort, itemsPerPage]);

  return (
    <section className={styles.container}>
      <ProductBanner />

      <CategorieContainer
        products={slicedProducts}
        selectItemPerPage={handleSelectItemsPerPage}
        selectSort={handleSetSort}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        onItemSelect={handleOnItemSelect}
        postsPerPage={itemsPerPage}
        totalPosts={data?.length as number}
      />

      <FeaturedProducts />

      <InfoSection2 />
    </section>
  );
};

export default ProductsPage;
