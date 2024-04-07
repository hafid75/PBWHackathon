import { useRouter } from "next/router";
import style from './style.module.css';
import { useXUMM } from "@/contexts/xummContext";

export default function NavBar() {
    const router = useRouter();
    const { userWallet, connectWallet, disconnectWallet, setUserWallet } = useXUMM();

    return (
        <div className={style.navbar}>
            <a className={style.leftContainer} onClick={() => router.push('/')}>
                <h1>EcoMobiRent</h1>
            </a>
            <div className={style.rightContainer}>
                <button onClick={() => router.push('/marketplace')} className={style.btnContainer}><h2 className={style.btnText}>Marketplace</h2></button>
                <button onClick={() => router.push('/professional')} className={style.btnContainer}><h2 className={style.btnText}>Professional</h2></button>
                {userWallet && userWallet?.length > 0 ?
                    <button onClick={async () => {await disconnectWallet(); setUserWallet("")}} className={style.signinBtn}><h2 className={style.signinText}>{userWallet?.slice(0, 5) + '...' + userWallet?.slice(userWallet?.length - 6, userWallet?.length)}</h2></button> :
                    <button onClick={async () => await connectWallet()} className={style.signinBtn}><h2 className={style.signinText}>Sign In</h2></button>}
            </div>
        </div>
    );
}
