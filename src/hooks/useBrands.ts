import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../pages/HomePage";

const useBrands = () => {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

  const [products, setProducts] = useState<Product[]>([]);

  const fetchBrands = async () => {
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const brands = products.filter((product) => product.brand);

  return [...new Set(brands)];
};

export default useBrands;
