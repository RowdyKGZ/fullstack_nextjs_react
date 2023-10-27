import Link from "next/link";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* 1 SECTION */}
      <h2 className={styles.subtitle}>Что нового</h2>
      <h1 className={styles.title}>Самые Популярные</h1>
      <MenuPosts withImage={false} />

      {/* 1 SECTION */}

      {/* Category SECTION */}
      <MenuCategories />
      {/* Category SECTION */}

      {/* 2 SECTION */}
      <h2 className={styles.subtitle}>Популярные блоги</h2>
      <h1 className={styles.title}>Выбор пользователя</h1>
      <MenuPosts withImage={true} />

      {/* 2 SECTION */}
    </div>
  );
};

export default Menu;
