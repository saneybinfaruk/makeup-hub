import { memo } from "react";
import styles from "./Pagination.module.css";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  onItemSelect: (pageNumber: number) => void;
  currentPage: number;
}
const Pagination = ({
  postsPerPage,
  totalPosts,
  onItemSelect,
  currentPage,
}: Props) => {
  if (totalPosts <= postsPerPage) return;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.container}>
      {pageNumbers.map((number) => (
        <button onClick={() => onItemSelect(number)} key={number}>
          <p
            className={
              currentPage === number ? styles.selected : styles.notSelected
            }
          >
            {number}
          </p>
        </button>
      ))}
    </div>
  );
};

export default memo(Pagination);
