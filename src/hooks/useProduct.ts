import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Product } from "../pages/HomePage";

const useProduct = (id: string) => {

  const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {},
  });

  const fetch = () => {
    const response = axiosInstance
      .get<Product>(`${BASE_URL}/${id}.json`)
      .then((res) => res.data)
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          return error.message;
        }
      });

    return response;
  };

  return useQuery({
    queryKey: ["product", id],
    queryFn: fetch,
  });
};

export default useProduct;
