"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  const handleClilcNextPage = (e) => {
    e.preventDefault();
    router.push(`?page=${page + 1}`, {
      shallow: true,
      scroll: false,
    });
  };

  const handleClilcPreviesPage = (e) => {
    e.preventDefault();
    router.push(`?page=${page - 1}`, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={handleClilcPreviesPage}
      >
        Previes
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={handleClilcNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
