import { useRouter } from "next/router";
import style from './style.module.css';
import { useXUMM } from "@/contexts/xummContext";

export default function NavBar() {
    const router = useRouter();
    const { userWallet, connectWallet, disconnectWallet } = useXUMM();

    return (
        <div className={style.navbar}>
            <div className={style.leftContainer}>
                <h1>EcoMobiRent</h1>
            </div>
            <div className={style.rightContainer}>
                <button onClick={() => router.push('/Marketplace')}><h2>Marketplace</h2></button>
                <button onClick={() => router.push('/Pro')}><h2>Professional</h2></button>
                <button onClick={() => router.push('/About')}><h2>About us</h2></button>
                {userWallet && userWallet?.length > 0 ?
                    <button onClick={() => disconnectWallet()}><h2>{userWallet?.slice(0, 5) + '...' + userWallet?.slice(userWallet?.length - 6, userWallet?.length)}</h2></button> :
                    <button onClick={() => connectWallet()}><h2>SignUp</h2></button>}
            </div>
        </div>
    );
}
