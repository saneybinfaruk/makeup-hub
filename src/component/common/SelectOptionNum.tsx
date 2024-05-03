import { BiSolidDownArrow } from "react-icons/bi";
import styles from "./SelectOption.module.css";
interface Props {
  label: string;
  id: string;
  items: number[];
  onChange: (item: number) => void;
}
const SelectOption = ({ label, id, items, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor="brands">{label}</label>
      <select
        name={id}
        id={id}
        onChange={(e) => onChange(parseInt(e.target.value))}
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {`${item} products`}
          </option>
        ))}
      </select>
      <BiSolidDownArrow className={styles.arrow} size={12} />
    </div>
  );
};

export default SelectOption;
