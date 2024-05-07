import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../pages/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "../component/state/store";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

const useProductTypes = () => {
  const productQuery = useSelector((state: RootState) => state.productQuery);

  const fetch = () => {
    const response = axios
      .get<Product[]>(`${BASE_URL}.json`, {
        params: {
          product_type: productQuery.productType,
          brand: productQuery.productBrand,
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
