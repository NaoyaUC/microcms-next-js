import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../libs/client'
import styles from "../styles/Home.module.scss";
import Date from '../libs/date';


export default function Home({news}) {
  return (
    <>
      <Head>
        <title>Nao-uc</title>
        <meta name="description" content="潰瘍性大腸炎持ちのプログラマー" />
      </Head>

      <div className={styles.main}>
        <div className={styles.homePhoto}>
          <Image
            src="/img/home.jpg"
            alt="blog"
            width={800}
            height={400}
            layout="responsive"
          ></Image>
        </div>

        <div className={styles.grid__container}>
          {news.map((news) => (
            <div key={news.id}>
              <Link href={`/news/${news.id}`}>
                <a>
                  {news.title}
                  <br />
                  <Date dateString={news.publishedAt} />
                </a>
              </Link>
            </div>
          ))}
        </div>
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