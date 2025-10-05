import styles from "./header.module.css";

export default function Header() {
return <header className={styles.header}>
  <nav className={styles.navbar}>
    <ul>
      <li className={styles.logo}><span className={styles.circulo}> ﾠ </span> Logo</li>
      <li>Home</li>
      <li>About</li>
      <li>Features </li>
      <li>Contact </li>
    </ul>
  </nav>
</header>
}