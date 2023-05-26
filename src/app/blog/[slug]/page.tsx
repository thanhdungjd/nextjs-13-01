import styles from "./styles.module.css";

import React from "react";

// a function return a promise after 3000ms
// import resolve and resolve from what libs?

function wait() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

export default async function BlogDetail() {
  await wait();
  return <div className={styles.main}>blog detail page....</div>;
}
