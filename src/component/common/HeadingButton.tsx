import CustomButton from "./CustomButton";
import styles from "./HeadingButton.module.css";

interface Props {
  heading: string;
  buttonBackgroundColor?: string;
  buttonTitleColor?: string;
}
const HeadingButton = ({
  heading,
  buttonBackgroundColor,
  buttonTitleColor,
}: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      <CustomButton
        title="see more"
        height="40px"
        width="150px"
        buttonBackgroundColor={buttonBackgroundColor}
        titleColor={buttonTitleColor}
      />
    </div>
  );
};

export default HeadingButton;
