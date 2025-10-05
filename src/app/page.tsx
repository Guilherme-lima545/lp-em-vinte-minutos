import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";

export default function Home() {
  return (
    <>
    <Header />
    <div className={styles.page}>
    <div className={styles.container}>
      <h1>Essa Landing page foi feita em 20 minutos? </h1>
      <p>Será que eu consegui fazer essa landing page em 20 minutos?</p>
      <button> Descubra aqui! </button>
      <p> Aproveita e me segue ai! </p>

    </div>

    <aside className={styles.aside}>
      <Image src="/assests/Notebook.png" alt="Notebook" width={1536} height={1024} className={styles.imagem} />
    </aside>
    </div>
    </>
  );
}
