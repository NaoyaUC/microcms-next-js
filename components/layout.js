import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";
// import { client } from "./client";
import Drawer from "./Drawer";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

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

      <header className="bg-blue-600 sticky top-0 z-10">
        <div className="text-center p-4">
          <div className="flex justify-center">
            <Link href={"/"}>
              <a className="text-stone-50 inline-block sm:text-2xl text-xl">
                {siteName}
              </a>
            </Link>
            <div className="block sm:block md:block lg:hidden xl:hidden ml-5">
              <button id="humberger" onClick={() => setIsOpen(true)}>
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-500 text-center hidden sm:hidden md:hidden lg:block xl:block py-2">
          <Link href="/">
            <a className="inline-block px-2 py-1 text-stone-50 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block text-stone-50 hover:text-white mr-4">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="inline-block text-stone-50 hover:text-white mr-4">
              Contact
            </a>
          </Link>
        </div>
      </header>

      <div className="container">
        <div className="flex justify-center">
          {children}
          <Sidebar />
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <footer className="bg-blue-600 p-2 text-center">
        <div className="text-center">
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
          <Link href="/sitemap">
            <a className="inline-block text-stone-50 hover:text-white mr-4">
              Sitemap
            </a>
          </Link>
        </div>
        ??copyright 2021
      </footer>
    </>
  );
}