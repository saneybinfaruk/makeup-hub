import { Product } from "../../pages/HomePage";
import CustomButton from "./CustomButton";
import GridContainer from "./GridContainer";
import styles from "./HorizontalListTitleBtn.module.css";

interface Props {
  heading: string;
  data: Product[];
  onSelect: () => void;
}
const HorizontalListTitleBtn = ({ heading, data, onSelect }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{heading}</h2>
        <CustomButton title="see more" titleColor="#000" onSelect={onSelect} />
      </div>

      {/* <div className={styles.gridContainer}>
        {data.map((data, index) => (
          <ProductCard key={data + index} />
        ))}
      </div> */}

      <GridContainer datas={data} />
    </div>
  );
};

export default HorizontalListTitleBtn;
