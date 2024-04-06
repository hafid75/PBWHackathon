import { useRouter } from "next/router";
import style from './style.module.css';
import { useXUMM } from "@/contexts/xummContext";

export default function NavBar() {
    const router = useRouter();
    const { userWallet, connectWallet, disconnectWallet } = useXUMM();

    return (
        <div className={style.navbar}>
            <a className={style.leftContainer} onClick={() => router.push('/')}>
                <h1>EcoMobiRent</h1>
            </a>
            <div className={style.rightContainer}>
                <button onClick={() => router.push('/marketplace')}><h2>Marketplace</h2></button>
                <button onClick={() => router.push('/professional')}><h2>Professional</h2></button>
                {userWallet && userWallet?.length > 0 ?
                    <button onClick={async () => disconnectWallet()}><h2>{userWallet?.slice(0, 5) + '...' + userWallet?.slice(userWallet?.length - 6, userWallet?.length)}</h2></button> :
                    <button onClick={async () => connectWallet()}><h2>SignUp</h2></button>}
            </div>
        </div>
    );
}
