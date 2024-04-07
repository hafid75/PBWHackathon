import NavBar from "@/components/NavBar/navbar";
import { useAxios } from "@/hooks/useAxios";
import styles from '@/styles/Professional.module.css';
import { useState } from "react";

type FormFieldData = {
  companyName: string,
  KBIS: number,
  minimumProfit: number,
  nftImage: File | undefined,
}

export default function Professional() {
  const { mintNFT } = useAxios();
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [response, setResponse] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState<FormFieldData>({
    companyName: "",
    KBIS: 0,
    minimumProfit: 0,
    nftImage: undefined,
  });

  const isFormValid = (formData: FormFieldData): boolean => {
    if (formData.companyName.trim() === '') return false;
    if (isNaN(formData.KBIS) || formData.KBIS <= 0) return false;
    if (isNaN(formData.minimumProfit) || formData.minimumProfit <= 0) return false;
    if (!formData.nftImage || formData.nftImage === undefined) return false;
    return true;
  };

  const handleSubmit = async () => {
    setIsMinting(true);
    isFormValid(formData);
    if (formData?.nftImage !== undefined) {
      const res = await mintNFT(formData?.companyName, formData?.KBIS, formData?.minimumProfit, formData?.nftImage);
      setResponse(res?.status);
    }
    setIsMinting(false);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setFormData({ ...formData, nftImage: selectedImages[0] });
    }
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Submit your Fleet</h1>
        <h2 className={styles.desc}>Become a partner !</h2>
        <h2 className={styles.desc}>Build your fleet, finance yourself, and earn rewards.
          Join the new generation of digital mobility agents
          boost your income with MobiRent referrals.
          To get started, simply fill out this form!</h2>

        <div className={styles.formGroup}>
          <label htmlFor="images">NFT Image</label>
          <input
            type="file"
            id="images"
            accept=".png, .jpg"
            onChange={handleImageChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="title">Company Name</label>
          <input
            type="text"
            placeholder="Enter you company name..."
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">KBIS number</label>
          <input
            type="number"
            placeholder="Enter your kbis number..."
            value={formData.KBIS}
            onChange={(e) => setFormData({ ...formData, KBIS: parseFloat(e.target.value) })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Minimum profit</label>
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Enter the minimum profit..."
            value={formData.minimumProfit}
            onChange={(e) => setFormData({ ...formData, minimumProfit: parseFloat(e.target.value) })}
          />
        </div>

        {!isMinting ?
          <div className={styles.buttonGroup}>
            <button onClick={async () => await handleSubmit()} className={styles.mintBtn}>Submit</button>
          </div>
          : <p className={styles.miningText}>Wait, you are mining your nft...</p>}

        {response !== undefined && <p className={styles.miningText}>{response}</p>}
      </div>
    </div>
  );
}
