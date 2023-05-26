import styles from "./styles.module.css";

import React from "react";

function wait() {
  return new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      //   resolve();
      reject(
        new Error(
          "This is an error from the blog detail page. It will be caught by the error boundary in the _app.tsx file. ALEX"
        )
      );
    }, 3000);
  });
}

export default async function BlogDetail() {
  await wait();
  return <div className={styles.main}>blog detail page....</div>;
}
