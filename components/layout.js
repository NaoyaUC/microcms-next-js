import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
// import { client } from "./client";

/**
 * .container {
    display: flex;
    min-height: calc(100vh - 64px);
    background-color: white;
    margin: 0 auto;
    width: min-content;
}
 */

const style = `
  display: flex;
  minHeight: calc(100vh - 64px);
  background-color: white;
  margin: 0 auto;
  width: min-content;
`;

export default function Layout({ children }) {
  const siteName = process.env.NEXT_PUBLIC_HOME_NAME;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
        />
      </Head>

      <header className="sticky top-0 z-10">
        <Link href={"/"}>
          <a className="text-stone-50 inline-block text-3xl">{siteName}</a>
        </Link>

        <div className="p-2">
          <Link href="/">
            <a className="inline-block m-4 lg:inline-block lg:mt-0 text-stone-50 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block m-4 lg:mt-0 text-stone-50 hover:text-white mr-4">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="inline-block m-4 lg:mt-0 text-stone-50 hover:text-white mr-4">
              Contact
            </a>
          </Link>
          <Link href="/sitemap">
            <a className="inline-block m-4 lg:mt-0 text-stone-50 hover:text-white mr-4">
              Sitemap
            </a>
          </Link>
        </div>
      </header>

      <div className={styles.container}>{children}</div>

      <footer>
        <div>
          <Link href={"/"}>
            <a className="mx-2 py-2 px-4 no-underline text-gray-50 hover:text-orange-300">
              Home
            </a>
          </Link>
          <Link href={"/contact"}>
            <a className="mx-2 py-2 px-4 no-underline text-gray-50 hover:text-orange-300">
              Contact
            </a>
          </Link>
          <Link href={"/"}>
            <a className="mx-2 py-2 px-4 no-underline text-gray-50 hover:text-orange-300">
              Home
            </a>
          </Link>
        </div>
        ©copyright 2021
      </footer>
    </>
  );
}