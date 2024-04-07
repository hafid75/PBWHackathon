import axios from "axios";

export const useAxios = () => {
    const mintNFT = async (name: string, kbis: number, minimumProfit: number, fileToUpload: File) => {
        try {
            const formData = new FormData();
            formData.append('companyName', name);
            formData.append('KBIS', kbis.toString());
            formData.append('minimumProfit', minimumProfit.toString());
            formData.append('nftImage', fileToUpload);

            const res = await axios.post("http://localhost:8080/mintNFT", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return(res?.data);
        } catch (error) {
            console.log("error from mintNFT:", error);
        }
    }

    return {
        mintNFT,
    };
}