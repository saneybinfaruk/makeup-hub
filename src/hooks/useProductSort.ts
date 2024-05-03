import { useState } from "react";
import { Product } from "../pages/HomePage";

const useProductSort = (products: Product[]) => {
  const [sort, setSort] = useState("");
  let sortedProducts = products;

  if (sort === "price high to low") {
    sortedProducts = products.sort(
      (a, b) => parseInt(b.price) - parseInt(a.price)
    );
  } else if (sort === "price low to high") {
    sortedProducts = products.sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );
  } else if (sort === "name A to Z") {
    const temp = [...products];
    sortedProducts = temp.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name Z to A") {
    const temp = [...products];
    sortedProducts = temp.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "newest first") {
    sortedProducts = products.sort((a, b) => {
      const aDateOb = new Date(a.created_at);
      const bDateOb = new Date(b.created_at);

      if (aDateOb < bDateOb) return 1;
      if (aDateOb > bDateOb) return -1;
      return 0;
    });
  } else if (sort === "oldest first") {
    sortedProducts = products.sort((a, b) => {
      const aDateOb = new Date(a.created_at);
      const bDateOb = new Date(b.created_at);

      if (aDateOb < bDateOb) return -1;
      if (aDateOb > bDateOb) return 1;
      return 0;
    });
  }

  return { sortedProducts, setSort , sort};
};

export default useProductSort;
