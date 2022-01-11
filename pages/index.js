import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../libs/client'
import styles from "../styles/Home.module.scss";

export default function Home({news}) {
  return (
    <>
      <Head>
        <title>Nao-uc</title>
        <meta name="description" content="潰瘍性大腸炎持ちのプログラマー" />
      </Head>

      <div className={styles.main}>
        <ul>
          {news.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>
                <a>{news.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps = async () =>{
  const data = await client.get({ endpoint: "news" });

  return {
    props : {
      news: data.contents,
    }
  }
}