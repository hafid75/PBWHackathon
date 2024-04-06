import NavBar from "@/components/NavBar/navbar";
import { useXUMM } from "@/contexts/xummContext";
import Image from "next/image";
import logo from '../assets/MacBook-Introduction.png';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const { connectWallet } = useXUMM();

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.homeContainer}>
        <div className={styles.homeLeftContainer}>
          <h1 className={styles.homeTitle}>Mobility Investment Starting at $10</h1>
          <h2 className={styles.homeDescription}>A win-win between Investors and Fleet Companies, access a new investment market</h2>
          <button onClick={async () => connectWallet()} className={styles.signBtn}><h2 className={styles.textBtn}>Sign in</h2></button>
        </div>
        <div className={styles.homeRightContainer}>
          <Image src={logo} width={500} height={500} alt="introduction picture" />
        </div>
      </div>
    </div>
  );
}
