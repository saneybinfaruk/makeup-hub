import carouselImage1 from "../../../assets/carouselImage1.png";
import carouselImage2 from "../../../assets/carouselImage1.png";
import carouselImage3 from "../../../assets/carouselImage1.png";
import carouselImage4 from "../../../assets/carouselImage1.png";
import carouselImage5 from "../../../assets/carouselImage1.png";
import styles from "./Carousel.module.css";
import CarouselLayout from "./CarouselLayout";

const Carousel = () => {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 13 Pro",
      description: "The latest iPhone model with advanced features.",
      price: 999.99,
      imageUrl: carouselImage1,
    },
    {
      id: 2,
      title: "Samsung Galaxy S22 Ultra",
      description:
        "Powerful Android smartphone with a large display and high-end camera.",
      price: 1099.99,
      imageUrl: carouselImage2,
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      description:
        "Next-gen gaming console with 4K graphics and fast SSD storage.",
      price: 499.99,
      imageUrl: carouselImage3,
    },
    {
      id: 4,
      title: "Bose QuietComfort 45 Headphones",
      description:
        "Premium noise-canceling headphones with immersive sound quality.",
      price: 329.95,
      imageUrl: carouselImage4,
    },
    {
      id: 5,
      title: "DJI Mavic Air 2 Drone",
      description:
        "Compact yet powerful drone with 4K camera and intelligent flight modes.",
      price: 799.0,
      imageUrl: carouselImage5,
    },
  ];

  return (
    <div className={styles.carousel}>
      <CarouselLayout products={products} onSelect={(id) => console.log(id)} />
    </div>
  );
};

export default Carousel;
