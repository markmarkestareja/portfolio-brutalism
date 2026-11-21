import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <p className={`${styles.kicker} mono`}>(Error) — Page not found</p>
      <h1 className={`${styles.code} display`}>404</h1>
      <div className={styles.row}>
        <p className={styles.text}>This page doesn’t exist — it may have moved, or the link is wrong.</p>
        <Link href="/" className={`${styles.home} mono`}>
          <span>Back home</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
