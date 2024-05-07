import CustomButton from "../common/CustomButton";
import CicleWithPrice from "../common/CircleWithPrice";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";
import { Product } from "../../pages/HomePage";
import { useNavigate } from "react-router-dom";
import styles from "./Carousel.module.css";
import getRandomItems from "../../utility/GetRandomItem";

const Carousel = ({ products }: { products: Product[] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [carouselData, setCarouselData] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const randomData = getRandomItems(products, 5);
      setCarouselData(randomData);
    };

    // Fetch data only once when the component mounts
    if (!carouselData.length) {
      fetchData();
    }
  }, [carouselData, products]);

  const handlePrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return carouselData?.length - 1;
      return index - 1;
    });

    console.log("clicked prev");
  };

  const handleNextImage = () => {
    setImageIndex((index) => {
      if (index === carouselData.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className={styles.carouselLayout}>
      <div className={styles.carouselContainer}>
        {carouselData.map((product) => (
          <div
            key={product.id}
            className={styles.carouselImage}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          >
            <div className={styles.gridLeft}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <CustomButton
                title="see more"
                onSelect={() => {
                  navigate(`/products/${product.id}`);
                }}
              />
            </div>

            <div className={styles.gridRight}>
              <div className={styles.imgContainer}>
                <CicleWithPrice
                  circleStyle={styles.circleStyle}
                  price={product.price === null ? "0" : product.price}
                  priceSign={product.price_sign}
                  priceSub="per pice"
                />
                <img src={product.api_featured_image} className={styles.img} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.carouselBtn}
        style={{ left: 0 }}
        onClick={handlePrevImage}
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        className={styles.carouselBtn}
        style={{ right: 0 }}
        onClick={handleNextImage}
      >
        <FaChevronRight size={20} />
      </button>

      <div className={styles.dotsBtnContainer}>
        {carouselData.map((product, index) => (
          <button
            key={product.id}
            onClick={() => setImageIndex(index)}
            className={styles.dotBtn}
          >
            {index === imageIndex ? <FaRegCircleDot /> : <GoDotFill />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
