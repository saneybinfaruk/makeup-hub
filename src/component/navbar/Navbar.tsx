import { Link, useNavigate } from "react-router-dom";
import NavIcon from "./NavIcons";
import styles from "./Navbar.module.css";
import { IoBasket, IoHeart, IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { CATEGORIES } from "../../constant/categories";

const Navbar = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  const cartList = useSelector((state: RootState) => state.cartList.cartItems);
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.brandContainer}>
        <Link to={"/"}>
          <h1 className={styles.brandMainText}>wavey</h1>
          <h5 className={styles.brandSubText}>beauty</h5>
        </Link>
      </div>
      <section className={styles.container}>
        <ul>
          {CATEGORIES.map((c) => (
            <li key={c.name}>
              <Link to={`#`} className={styles.navItem}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.iconContainer}>
          <div onClick={() => navigate("/products")}>
            <NavIcon
              children={<IoSearch size={25} />}
              iconName="search"
              countTextVisibility={false}
            />
          </div>
          <div
            className={styles.favoriteContainer}
            onClick={() => navigate("/favoriteProducts")}
          >
            <NavIcon children={<IoHeart size={25} />} iconName="favorite" />
            <p className={styles.counterText}>{favoriteList.length}</p>
          </div>
          <div
            className={styles.cartContainer}
            onClick={() => {
              navigate("/productsCart");
            }}
          >
            <NavIcon
              children={<IoBasket size={25} />}
              iconName="shopping_basket"
            />
            <p className={styles.counterText}>{cartList.length}</p>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
