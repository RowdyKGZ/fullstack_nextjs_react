import Image from "next/image";

import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Привет с тобой Элдияр,</b> Добро пожаловать в мой блог
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Блог про меня буду выкладывать по возможности все
          </h2>
          <p className={styles.postDescription}>
            Следи за блогом тут будет полезные и иногда нет умозаключение, а так
            же разные приключения в моей жизни
          </p>

          <button className={styles.button}>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
