import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Home Page</div>
      <Link href={"/about"}>Go to About Page</Link>
    </main>
  );
}
