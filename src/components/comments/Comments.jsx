"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import styles from "./comments.module.css";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc(``);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt="user image"
                      width={50}
                      height={50}
                    />
                  )}

                  <div className={styles.userInfo}>
                    <div className={styles.username}>{item.user.name}</div>
                    <div className={styles.date}>{item.createdAt}</div>
                  </div>
                </div>

                <p className={styles.description}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
