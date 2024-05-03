import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductQuery } from "../pages/ProductsPage";
import { Product } from "../pages/HomePage";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useProductTypes = (productQuery: ProductQuery) => {
  const fetch = () => {
    const response = axios
      .get<Product[]>(`${BASE_URL}.json`, {
        params: {
          product_type: productQuery.product_type,
          brand: productQuery.brand,
          price_less_than: productQuery.maxPrice,
          price_greater_than: productQuery.minPrice,
        },
      })
      .then((res) => res.data);

    return response;
  };

  return useQuery({
    queryKey: ["products", productQuery],
    queryFn: fetch,
  });
};

export default useProductTypes;
