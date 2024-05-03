import { Link } from "react-router-dom";
import IconBg from "./NavIcons";
import styles from "./Navbar.module.css";
import { IoBasket, IoHeart, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brandContainer}>
        <Link to={"/"}>
          <h1 className={styles.brandMainText}>wavey</h1>
          <h5 className={styles.brandSubText}>beauty</h5>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="#">skincare</Link>
        </li>
        <li>
          <Link to="#">make-up</Link>
        </li>
        <li>
          <Link to="#">mens</Link>
        </li>
        <li>
          <Link to="#">supplements</Link>
        </li>
      </ul>

      <div className={styles.iconContainer}>
        <IconBg
          children={<IoSearch size={25} />}
          iconName="search"
          countTextVisibility={false}
        />
        <IconBg children={<IoHeart size={25} />} iconName="favorite" />
        <IconBg children={<IoBasket size={25} />} iconName="shopping_basket" />
      </div>
    </nav>
  );
};

export default Navbar;
