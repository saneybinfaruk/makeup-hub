import { useState } from "react";
import { Product } from "../pages/HomePage";

const useProductPagination = (sortedProducts: Product[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  // get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const slicedProducts = sortedProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return {
    slicedProducts,
    setCurrentPage,
    currentPage,
    setItemsPerPage,
    itemsPerPage,
  };
};

export default useProductPagination;
