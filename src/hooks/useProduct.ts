import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../pages/HomePage";

const useProduct = (id: string) => {
  const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

  const axiosInstance = axios.create({
    baseURL: "http://makeup-api.herokuapp.com/api/v1/products",
    headers: {},
  });

  const fetch = () => {
    const response = axiosInstance
      .get<Product>(`${BASE_URL}/${id}.json`)
      .then((res) => res.data);

    return response;
  };

  return useQuery({
    queryKey: ["product", id],
    queryFn: fetch,
  });
};

export default useProduct;
