import { Fragment } from "react/jsx-runtime";
import { CATEGORIES } from "../../constant/categories";
import { Product } from "../../pages/HomePage";
import styles from "./CategorieContainer.module.css";
import GridContainer from "./GridContainer";
import SelectOption from "./SelectOption";
import { useState } from "react";
import { BRANDS } from "../../constant/brand";
import SelectOptionNum from "./SelectOptionNum";
interface Props {
  isLoading: boolean;
  products: Product[];

  selectedTypes: (types: string) => void;
  selectedBrand: (brand: string) => void;
  selectSort: (sort: string) => void;
  selectItemPerPage: (itemPerPage: number) => void;
  minChange: (value: number) => void;
  maxChange: (value: number) => void;
}

const CategorieContainer = ({
  products,
  isLoading,
  selectedTypes,
  selectedBrand,
  selectSort,
  selectItemPerPage,
  minChange,
  maxChange,
}: Props) => {
  const [type, setType] = useState("");
  const allBrands = ["all", ...BRANDS];

  const sortBy = [
    "newest first",
    "oldest first",
    "name A to Z",
    "name Z to A",
    "price high to low",
    "price low to high",
  ];

  const showNum = [30, 50, 80, 100];

  return (
    <section className={styles.container}>
      
      <aside className={styles.asideContainer}>
        <div className={styles.priceRangeContainer}>
          <h5>select price</h5>

          <div className={styles.inputSection}>
            <div className={styles.inputContainer1}>
              <input
                type="text"
                onChange={(e) => minChange(parseInt(e.target.value))}
              />
              <p>min.</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.inputContainer2}>
              <input
                type="text"
                onChange={(e) => maxChange(parseInt(e.target.value))}
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
                      selectedTypes(subCategorie);
                      setType(subCategorie);
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
            onChange={(value) => selectedBrand(value === "all" ? "" : value)}
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
            onChange={(itemPerPage) => selectItemPerPage(itemPerPage)}
          />
        </section>

        <section className={styles.productsSection}>
          <GridContainer datas={products} isLoading={isLoading} />
        </section>
      </main>
    </section>
  );
};

export default CategorieContainer;
