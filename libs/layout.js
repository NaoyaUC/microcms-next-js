import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href={"/"}>
          <a>
            <div className={styles.homeNav}>Nao-uc</div>
          </a>
        </Link>
      </header>

      
      <div className={styles.container}>{children}</div>

      <footer>
        <div>
          <Link href={"/"}>
            <a className={styles.nav_item}>Home</a>
          </Link>
          <Link href={"/contact"}>
            <a className={styles.nav_item}>Contact</a>
          </Link>
          <Link href={"/"}>
            <a className={styles.nav_item}>Home</a>
          </Link>
        </div>
        ©copyright 2021
      </footer>
    </>
  );
}
