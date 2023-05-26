import styles from "./styles.module.css";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className={styles.main}>
      <div>about page</div>
      <Link href={"/"}>Go to Home Page</Link>
    </div>
  );
}
