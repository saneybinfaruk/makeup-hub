import HeadingList from "../component/common/HeadingList";
import InfoSection from "../component/infoSection/InfoSection";
import InfoSection2 from "../component/infoSection/InfoSection2";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Spinner from "../component/common/Spinner";
import Carousel from "../component/carousel/Carousel";
import FeaturedProducts from "../component/productFeature/FeaturedProducts";
import getRandomItems from "../utility/GetRandomItem";
import PromotionalProduct from "../component/productFeature/PromotionalProduct";
import GiftSection from "../component/common/GiftSection";

export type Product = {
  id: number;
  name: string;
  product_type: string;
  brand: string;
  price: string;
  price_sign: string;
  image_link: string;
  discount: number;
  api_featured_image: string;
  description: string;
  created_at: string;
  favorite: number;
};
const HomePage = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useProducts();

  const handleOnSelect = () => {
    navigate("/products");
  };

  if (isLoading)
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
      </div>
    );

  return (
    <div className={styles.body}>
      <Carousel products={data || []} />


      <HeadingList
        heading="Clean beauty"
        data={getRandomItems(data || [], 8)}
        onSelect={handleOnSelect}
      />
      <FeaturedProducts />
      
      <HeadingList
        heading="Our best"
        data={getRandomItems(data!, 4)}
        onSelect={handleOnSelect}
      />
      <PromotionalProduct id={getRandomItems(data || [], 1)[0].id.toString()} />

      <InfoSection />

      <InfoSection2 />
      
      <GiftSection />

     
    </div>
  );
};

export default HomePage;
