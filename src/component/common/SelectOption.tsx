import { BiSolidDownArrow } from "react-icons/bi";
import styles from "./SelectOption.module.css";
interface Props {
  label: string;
  id: string;
  brands: string[];
  onChange: (brand: string) => void;
}
const SelectOption = ({ label, id, brands, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor="brands">{label}</label>
      <select name={id} id={id} onChange={(e) => onChange(e.target.value)}>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <BiSolidDownArrow className={styles.arrow} size={12} />
    </div>
  );
};

export default SelectOption;
