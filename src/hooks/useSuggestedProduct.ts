import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../pages/HomePage";
import RandomIndex from "../utility/RandomIndex";

const useSuggestedProduct = (product: Product) => {
  const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

  const fetch = () => {
    const response = axios
      .get<Product[]>(`${BASE_URL}.json`, {
        params: {
          product_type: product?.product_type,
        },
      })
      .then((res) => res.data);

    return response;
  };

  return useQuery({
    queryKey: ["suggestedProducts", product?.id],
    queryFn: fetch,
    select: (data) =>
      data
        .filter((p) => p.id !== product.id)
        .slice(
          RandomIndex(0, data.length / 2),
          RandomIndex(data.length / 2, data.length)
        ),
  });
};

export default useSuggestedProduct;
