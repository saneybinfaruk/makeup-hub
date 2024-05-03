import styles from "./InfoSection.module.css";
import image from "../../assets/info.png";

const InfoSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={image} />
      </div>
      <div className={styles.right}>
        <h1>Elegance what you deserves.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.  
        </p>
        <br/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen industry's standard dummy.  
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
