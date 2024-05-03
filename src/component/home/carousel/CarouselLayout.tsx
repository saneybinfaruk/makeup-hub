import styles from "./CarouselLayout.module.css";
import CustomButton from "../../common/CustomButton";
import CicleWithPrice from "../../common/CicleWithPrice";
import { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FaChevronLeft, FaDotCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import { LuCircleDot } from "react-icons/lu";
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

const CarouselLayout = ({ products, onSelect }: Props) => {
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
        {products.map((product, index) => (
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

          // <div className={styles.container}>
          //   <div className={styles.gridLeft}>
          //     <h1 className={styles.heading}>{"title"}</h1>
          //     <p className={styles.subHeading}>{"description"}</p>
          //     <CustomButton
          //       onSelect={() => onSelect(2)}
          //       title="see more"
          //       titleColor="#000"
          //     />
          //   </div>
          //   <div className={styles.gridRight}>
          //     <div className={styles.imgContainer}>
          //       <CicleWithPrice
          //         circleStyle={styles.circleStyle}
          //         price={45}
          //         priceSub="per price, 30 ml"
          //       />
          //       <img src={"imageUrl"} className={styles.img} />
          //     </div>
          //   </div>
          // </div>
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
    // <div className={styles.container}>
    //   <div className={styles.gridLeft}>
    //     <h1 className={styles.heading}>{title}</h1>
    //     <p className={styles.subHeading}>{description}</p>
    //     <CustomButton
    //       onSelect={() => onSelect(id)}
    //       title="see more"
    //       titleColor="#000"
    //     />
    //   </div>
    //   <div className={styles.gridRight}>
    //     <div className={styles.imgContainer}>
    //       <CicleWithPrice
    //         circleStyle={styles.circleStyle}
    //         price={price}
    //         priceSub="per price, 30 ml"
    //       />
    //       <img src={imageUrl} className={styles.img} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default CarouselLayout;
