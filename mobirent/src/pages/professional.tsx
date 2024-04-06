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
    isFormValid(formData) && formData?.nftImage !== undefined && mintNFT(formData?.companyName, formData?.KBIS, formData?.minimumProfit, formData?.nftImage);
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
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">KBIS number</label>
          <input
            type="number"
            step="0.01"
            value={formData.KBIS}
            onChange={(e) => setFormData({ ...formData, KBIS: parseFloat(e.target.value) })}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Minimum profit</label>
          <input
            type="number"
            step="0.01"
            value={formData.minimumProfit}
            onChange={(e) => setFormData({ ...formData, minimumProfit: parseFloat(e.target.value) })}
          />
        </div>
        
        <div className={styles.buttonGroup}>
          <button onClick={async () => await handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
