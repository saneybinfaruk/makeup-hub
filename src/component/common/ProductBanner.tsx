import styles from './ProductBanner.module.css'
import productImg from '../../assets/productImageBig.png';

const ProductBanner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.itemContainer}>
        <h1>Bath & Body cosmetics just for you!</h1>
        <p>Home/Skincare/Bath & Body</p>
      </div>

      <img src={productImg} />
      

    </section>
  )
}

export default ProductBanner