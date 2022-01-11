import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function BlogId({news}){
  return (
    <>
      <Head>
        <title>Nao-uc | {news.title}</title>
        <meta name="description" content="潰瘍性大腸炎持ちのプログラマー" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{news.title}</h1>
        <Image
          src={news.thumbnail.url}
          width={news.thumbnail.width}
          height={news.thumbnail.height}
          alt={news.title}
        />

        <p className={styles.publishedAt}>{news.publishedAt}</p>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${news.content}`,
          }}
        />

        <Link href={"/"}>
          <a>homeに戻る</a>
        </Link>
      </main>
    </>
  );
}

//静的生成の為のPATHを指定
export const getStaticPaths = async () =>{
  //データ取得
  const data = await client.get({endpoint: "news"});
  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
}

//データをtemplate に受け渡す部分の処理を記述
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({endpoint: "news", contentId:id});

  return {
    props : {
      news : data,
    }
  }
}
