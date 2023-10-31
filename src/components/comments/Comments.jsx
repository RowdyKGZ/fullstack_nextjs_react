import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "aythenticated";

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>

      {status ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user image" width={50} height={50} />

            <div className={styles.userInfo}>
              <div className={styles.username}>Jon Doe</div>
              <div className={styles.date}>20.10.2023</div>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum minima consectetur ut architecto deleniti
            consequuntur optio nemo voluptate nam!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user image" width={50} height={50} />

            <div className={styles.userInfo}>
              <div className={styles.username}>Jon Doe</div>
              <div className={styles.date}>20.10.2023</div>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum minima consectetur ut architecto deleniti
            consequuntur optio nemo voluptate nam!
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="user image" width={50} height={50} />

            <div className={styles.userInfo}>
              <div className={styles.username}>Jon Doe</div>
              <div className={styles.date}>20.10.2023</div>
            </div>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum minima consectetur ut architecto deleniti
            consequuntur optio nemo voluptate nam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
