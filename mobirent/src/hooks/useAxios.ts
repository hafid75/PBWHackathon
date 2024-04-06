import axios from "axios";

export const useAxios = () => {
    const mintNFT = async (name: string, kbis: number, minimumProfit: number, fileToUpload: File) => {
        try {
            const res = await axios.post("localhost:8080/mintNFT", {
                companyName: name,
                KBIS: kbis,
                minimumProfit: minimumProfit,
                nftImage: fileToUpload,
            });
            console.log("res from /mintNFT of back-end:", res?.data);
        } catch (error) {
            console.log("error from mintNFT:", error);
        }
    }

    return {
        mintNFT,
    };
}