import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </nav>
      <main className={styles.main}>
        <section>
          <div>
            <p className={styles.info}>Helloo</p>
            <p className={styles.name}>I'm Bryce</p>
            <p className={styles.title}>Software Engineer @Microsoft</p>
          </div>
          <div className={styles.socials}>
            <img className={styles.logo} src="github.svg" alt="github" />
            <img className={styles.logo} src="twitter.svg" alt="twitter" />
            <img className={styles.logo} src="linkedin.svg" alt="linkedin" />
          </div>
        </section>
        <img className={styles.image} src="face-image.svg" alt="unsplash" />
      </main>
    </div>
  );
};

export default Home;
