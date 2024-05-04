import HorizontalListTitleBtn from "../component/common/HorizontalListTitleBtn";
import InfoSection from "../component/common/InfoSection";
import InfoSection2 from "../component/common/InfoSection2";
import NewProducts from "../component/common/NewProducts";
import styles from "./HomePage.module.css";
import Carousel from "../component/home/carousel/Carousel";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Spinner from "../component/common/Spinner";

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

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.body}>
      <Carousel />
      <HorizontalListTitleBtn
        heading="Clean beauty"
        data={(data as Product[]).slice(0, 8)}
        onSelect={handleOnSelect}
      />
      <NewProducts />
      <InfoSection />
      <InfoSection2 />
      <NewProducts />
      {/* <HorizontalListTitleBtn heading="Our best" data={ourBestData} /> */}
      {/* <NewProducts />
      <HorizontalListTitleBtn heading="Our best" data={ourBestData} />
      <PromotionalSection />
      <InfoSection />
      <InfoSection2 />
      <GiftSection />
      <Footer /> */}
      {/* <ProductBanner /> */}
      {/* <CategorieContainer /> */}
      {/* <NewProducts /> */}
      {/* <InfoSection2 /> */}
      {/* <ProductDetails /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
