import NavBar from "@/components/NavBar/navbar";
import { useXUMM } from "@/contexts/xummContext";
import styles from '@/styles/Marketplace.module.css';

export default function Marketplace() {
  const { connectWallet } = useXUMM();

  return (
    <div className={styles.container}>
      <NavBar />
      <p>Marketplace</p>
    </div>
  );
}
