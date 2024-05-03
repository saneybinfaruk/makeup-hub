import { useEffect, useState } from "react";
import ProductBanner from "../component/common/ProductBanner";
import CategorieContainer from "../component/common/CategorieContainer";
import useProductTypes from "../hooks/useProductTypes";
import useProductSort from "../hooks/useProductSort";
import useProductPagination from "../hooks/useProductPagination";
import Pagination from "../component/common/Pagination";
import { Product } from "./HomePage";

export type ProductQuery = {
  product_type: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
};
const ProductsPage = () => {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  const { data, isLoading } = useProductTypes(productQuery);

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

  const handleMinPrice = (value: number) => {
    setProductQuery({ ...productQuery, minPrice: value });
  };

  const handleMaxPrice = (value: number) => {
    setProductQuery({ ...productQuery, maxPrice: value });
  };

  const handleSelectedTypes = (value: string) => {
    setProductQuery({ ...productQuery, product_type: value, brand: "" });
  };

  const handleSelectedBrand = (value: string) => {
    setProductQuery({ ...productQuery, brand: value });
  };

  const handleSelectItemsPerPage = (value: number) => {
    setItemsPerPage(value);
  };

  const handleSetSort = (value: string) => {
    setSort(value);
  };

  const handleOnItemSelect = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (!isLoading) {
      setProducts(data as Product[]);
    }
    setCurrentPage(1);
  }, [data, sort, itemsPerPage]);

  return (
    <section>
      <ProductBanner />
      <CategorieContainer
        products={slicedProducts}
        minChange={handleMinPrice}
        maxChange={handleMaxPrice}
        selectedTypes={handleSelectedTypes}
        selectItemPerPage={handleSelectItemsPerPage}
        selectedBrand={handleSelectedBrand}
        selectSort={handleSetSort}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        onItemSelect={handleOnItemSelect}
        postsPerPage={itemsPerPage}
        totalPosts={data?.length as number}
      />
    </section>
  );
};

export default ProductsPage;
