import styles from "./CarouselLayout.module.css";
import CustomButton from "../../common/CustomButton";
import CicleWithPrice from "../../common/CicleWithPrice";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";

export type Product = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  id: number;
};
interface Props {
  products: Product[];
  onSelect: (id: number) => void;
}

const CarouselLayout = ({ products }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return products.length - 1;
      return index - 1;
    });

    console.log("clicked prev");
  };

  const handleNextImage = () => {
    setImageIndex((index) => {
      if (index === products.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className={styles.carouselLayout}>
      <div className={styles.carouselContainer}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.carouselImage}
            style={{
              translate: `${-100 * imageIndex}%`,
            }}
          >
            <div className={styles.gridLeft}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <CustomButton
                title="see more"
                onSelect={() => {
                  console.log("clicked");
                }}
              />
            </div>
            <div className={styles.gridRight}>
              <div className={styles.imgContainer}>
                <CicleWithPrice
                  circleStyle={styles.circleStyle}
                  price={45}
                  priceSub="per price, 30 ml"
                />
                <img src={product.imageUrl} className={styles.img} />
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
        {products.map((product, index) => (
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

export default CarouselLayout;
