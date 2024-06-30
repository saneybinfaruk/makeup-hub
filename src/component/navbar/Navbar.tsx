import { Link, useNavigate } from "react-router-dom";
import NavIcon from "./NavIcons";
import styles from "./Navbar.module.css";
import { IoBasket, IoClose, IoHeart, IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { CATEGORIES } from "../../constant/categories";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  const cartList = useSelector((state: RootState) => state.cartList.cartItems);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.brandContainer}>
          <Link to={"/"}>
            <h1 className={styles.brandMainText}>wavey</h1>
            <h5 className={styles.brandSubText}>beauty</h5>
          </Link>
        </div>

        <div className={styles.hamburger}>
          {open ? (
            <CgClose size={30} onClick={handleOpen} />
          ) : (
            <RxHamburgerMenu size={30} onClick={handleOpen} />
          )}
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

      {open && (
        <section className={styles.mobileContainer}>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <Link
                  to={`#`}
                  className={styles.navItem}
                  onClick={() => setOpen(false)}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.iconContainer}>
            <div
              onClick={() => {
                navigate("/products");
                setOpen(false);
              }}
            >
              <NavIcon
                children={<IoSearch size={25} />}
                iconName="search"
                countTextVisibility={false}
              />
            </div>
            <div
              className={styles.favoriteContainer}
              onClick={() => {
                navigate("/favoriteProducts");
                setOpen(false);
              }}
            >
              <NavIcon children={<IoHeart size={25} />} iconName="favorite" />
              <p className={styles.counterText}>{favoriteList.length}</p>
            </div>
            <div
              className={styles.cartContainer}
              onClick={() => {
                navigate("/productsCart");
                setOpen(false);
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
      )}
    </div>
  );
};

export default Navbar;
