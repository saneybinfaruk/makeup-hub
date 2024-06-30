import { Fragment } from "react/jsx-runtime";
import { CATEGORIES } from "../../constant/categories";
import { Product } from "../../pages/HomePage";
import styles from "./CategorieContainer.module.css";
import GridContainer from "./GridContainer";
import SelectOption from "./SelectOption";
import { memo, useCallback, useMemo, useState } from "react";
import { BRANDS } from "../../constant/brand";
import SelectOptionNum from "./SelectOptionNum";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductBrand,
  setProductMaxPrice,
  setProductMinPrice,
  setProductType,
} from "../state/querySlice";
import { RootState } from "../state/store";
import CustomButton from "./CustomButton";
import { CgClose } from "react-icons/cg";
interface Props {
  isLoading: boolean;
  products: Product[];

  selectSort: (sort: string) => void;
  selectItemPerPage: (itemPerPage: number) => void;
}

const CategorieContainer = ({
  products,
  isLoading,
  selectSort,
  selectItemPerPage,
}: Props) => {
  const [open, setOpen] = useState(false);
  const productQuery = useSelector((state: RootState) => state.productQuery);
  const dispatch = useDispatch();

  const [type, setType] = useState(
    productQuery.productType ? productQuery?.productType : ""
  );

  const allBrands = useMemo(() => {
    return ["all", ...BRANDS];
  }, []);

  const handleOnBrandChange = useCallback((value: string) => {
    dispatch(setProductBrand(value === "all" ? "" : value));
  }, []);

  const sortBy = useMemo(() => {
    return [
      "newest first",
      "oldest first",
      "name A to Z",
      "name Z to A",
      "price high to low",
      "price low to high",
    ];
  }, []);

  const showNum = useMemo(() => [30, 50, 80, 100], []);

  return (
    <section className={styles.container}>
      {open && (
        <aside className={styles.asideContainer}>
          <div className={styles.priceRangeContainer}>
            <div className={styles.closeBtnContainer}>
              <h5>select price</h5>
              <CgClose
                className={styles.closeBtn}
                size={25}
                onClick={() => setOpen(!open)}
              />
            </div>

            <div className={styles.inputSection}>
              <div className={styles.inputContainer1}>
                <input
                  type="text"
                  onChange={(e) => dispatch(setProductMinPrice(e.target.value))}
                />
                <p>min.</p>
              </div>

              <div className={styles.line}></div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  onChange={(e) => dispatch(setProductMaxPrice(e.target.value))}
                />
                <p>max</p>
              </div>
            </div>
          </div>

          <section className={styles.categoriesSections}>
            {CATEGORIES.map((categorie) => (
              <Fragment key={categorie.name}>
                <h6>{categorie.name}</h6>
                <ul>
                  {categorie.subCategories.map((subCategorie) => (
                    <li
                      key={subCategorie}
                      onClick={() => {
                        dispatch(setProductType(subCategorie));
                        setType(subCategorie);
                        setOpen(!open);
                      }}
                      style={{ cursor: "pointer" }}
                      className={
                        type === subCategorie
                          ? styles.activeItem
                          : styles.normalItem
                      }
                    >
                      {subCategorie}
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </section>
        </aside>
      )}

      <aside className={styles.mAsideContainer}>

        <div className={styles.priceRangeContainer}>
          <div className={styles.closeBtnContainer}>
            <h5>select price</h5>
            <CgClose
              className={styles.closeBtn}
              size={25}
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={styles.inputSection}>
            <div className={styles.inputContainer1}>
              <input
                type="text"
                onChange={(e) => dispatch(setProductMinPrice(e.target.value))}
              />
              <p>min.</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.inputContainer2}>
              <input
                type="text"
                onChange={(e) => dispatch(setProductMaxPrice(e.target.value))}
              />
              <p>max</p>
            </div>
          </div>
        </div>

        <section className={styles.categoriesSections}>
          {CATEGORIES.map((categorie) => (
            <Fragment key={categorie.name}>
              <h6>{categorie.name}</h6>
              <ul>
                {categorie.subCategories.map((subCategorie) => (
                  <li
                    key={subCategorie}
                    onClick={() => {
                      dispatch(setProductType(subCategorie));
                      setType(subCategorie);
                      setOpen(!open);
                    }}
                    style={{ cursor: "pointer" }}
                    className={
                      type === subCategorie
                        ? styles.activeItem
                        : styles.normalItem
                    }
                  >
                    {subCategorie}
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </section>

      </aside>

      <main className={styles.mainContainer}>
        <section className={styles.menuSection}>
          <SelectOption
            label="brands"
            brands={allBrands}
            id="brands"
            onChange={handleOnBrandChange}
          />
          <SelectOption
            label="sort by"
            brands={sortBy}
            id="sortBy"
            onChange={selectSort}
          />
          <SelectOptionNum
            label="show"
            items={showNum}
            id="show"
            onChange={selectItemPerPage}
          />

          <div className={styles.filterBtn}>
            <CustomButton
              onSelect={() => setOpen(!open)}
              title="Filter"
              width="100%"
            />
          </div>
        </section>

        <section className={styles.productsSection}>
          <GridContainer datas={products} isLoading={isLoading} />
        </section>
      </main>
    </section>
  );
};

export default memo(CategorieContainer);
