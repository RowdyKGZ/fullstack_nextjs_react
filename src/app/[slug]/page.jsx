import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";
import CardList from "@/components/cardList/CardList";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, totam!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="iamge user"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jon Doe</span>
              <span className={styles.date}>20.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt="image post"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              beatae odit odio molestiae sequi facere aperiam quas repudiandae
              fugiat culpa cum illo cumque alias deleniti autem, repellendus id
              illum? Aperiam.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              beatae odit odio molestiae sequi facere aperiam quas repudiandae
              fugiat culpa cum illo cumque alias deleniti autem, repellendus id
              illum? Aperiam.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              beatae odit odio molestiae sequi facere aperiam quas repudiandae
              fugiat culpa cum illo cumque alias deleniti autem, repellendus id
              illum? Aperiam.
            </p>
          </div>

          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
