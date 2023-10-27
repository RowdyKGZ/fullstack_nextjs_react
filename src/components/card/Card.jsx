import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post image" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>24.10.2023 -</span>
          <span className={styles.category}> Culture</span>
        </div>

        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit et vitae
          atque illo alias. Doloremque odio consequuntur in dolor dolore?
        </p>

        <Link href="/" className={styles.link}>
          Узнать больше
        </Link>
      </div>
    </div>
  );
};

export default Card;
