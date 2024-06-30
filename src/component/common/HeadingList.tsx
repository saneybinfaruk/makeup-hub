import { Product } from "../../pages/HomePage";
import CustomButton from "./CustomButton";
import GridContainer from "./GridContainer";
import styles from "./HeadingList.module.css";

interface Props {
  heading: string;
  data: Product[];
  onSelect: () => void;
}
const HeadingList = ({ heading, data, onSelect }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.headingTitle}>{heading}</h2>
        <CustomButton title="see more" titleColor="#000" onSelect={onSelect} />
      </div>

      <GridContainer datas={data} />
    </div>
  );
};

export default HeadingList;
