import styles from './style.module.css';
import Image from 'next/image';

type FleetData = {
  companyName: string,
  KBIS: number,
  minimumProfit: number,
  nftImage: string,
}

export default function FleetCard(props: FleetData) {
  const handleInvest = () => {
    // open the Xaman app to pay and sign the contract
  }

  return (
    <div className={styles.container}>
      <Image alt='fleet' src={props?.nftImage} className={styles.FleetImage} width={100} height={100} layout="responsive" />
      <div className={styles.dataContainer}>
        <p className={styles.fleetParams}>Company name: {props?.companyName}</p>
        <p className={styles.fleetParams}>Kbis number: {props?.KBIS.toString().slice(0, 3)} {props?.KBIS.toString().slice(3, 6)} {props?.KBIS.toString().slice(6, 9)}</p>
        <p className={styles.fleetParams}>Minimum profit: {props?.minimumProfit}% /year</p>
        <button onClick={() => handleInvest()} className={styles.InvestBtn}><h2 className={styles.InvestText}>Invest</h2></button>
      </div>
    </div>
  );
}
