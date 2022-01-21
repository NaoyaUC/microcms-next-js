import styles from "../styles/Home.module.scss";

export default function Custom404() {
  return (
    <main className={styles.main}>
      <div className="flex justify-center items-center flex-col p-4 border-2">
        <h1 className="text-5xl mb-5">Not Found</h1>
        <p>ページがありません</p>
      </div>
    </main>
  );
}
