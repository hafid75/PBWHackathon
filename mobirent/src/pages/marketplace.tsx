import FleetCard from "@/components/FleetCard";
import NavBar from "@/components/NavBar/navbar";
import { useXUMM } from "@/contexts/xummContext";
import styles from '@/styles/Marketplace.module.css';
import logo from '../assets/MacBook-Introduction.png';

export default function Marketplace() {
  const { connectWallet } = useXUMM();

  return (
    <div className={styles.container}>
      <NavBar />
      <p>Marketplace</p>
      <div className={styles.gridContainer}>
        <FleetCard companyName={"test"} KBIS={168746416} minimumProfit={16} nftImage={logo?.src} />
        <FleetCard companyName={"daja"} KBIS={156486163} minimumProfit={5} nftImage={logo?.src} />
        <FleetCard companyName={"solin"} KBIS={656984615} minimumProfit={18} nftImage={logo?.src} />
        <FleetCard companyName={"E-move"} KBIS={483439444} minimumProfit={14} nftImage={logo?.src} />
        <FleetCard companyName={"solin"} KBIS={468632486} minimumProfit={22} nftImage={logo?.src} />
        <FleetCard companyName={"heliota"} KBIS={689468468} minimumProfit={15} nftImage={logo?.src} />
      </div>
    </div>
  );
}
