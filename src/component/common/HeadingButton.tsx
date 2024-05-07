import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import styles from "./HeadingButton.module.css";

interface Props {
  heading: string;
  buttonBackgroundColor?: string;
  buttonTitleColor?: string;
  id: string;
}
const HeadingButton = ({
  heading,
  buttonBackgroundColor,
  buttonTitleColor, 
  id
}: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      <CustomButton
        title="see more"
        height="40px"
        width="150px"
        buttonBackgroundColor={buttonBackgroundColor}
        titleColor={buttonTitleColor}
        onSelect={()=> navigate(`/products/${id}`)}
      />
    </div>
  );
};

export default HeadingButton;
