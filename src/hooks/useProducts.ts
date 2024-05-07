import { Product } from "../pages/HomePage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

  const fetch = async () => {
    try {
      const res = await axios.get<Product[]>(url);
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  };
  const query = useQuery<Product[], Error>({
    queryKey: ["products"],
    staleTime: 24 * 60 * 60 * 1000, // 24h
    queryFn: fetch,
  });

  return query;
};

export default useProducts;
