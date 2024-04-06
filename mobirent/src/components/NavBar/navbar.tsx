import { useRouter } from "next/router";
import style from './style.module.css';

export default function NavBar() {
    const router = useRouter();

    const handleSignUp = () => {
        //open the sign up pop 
    }

    return (
        <div className={style.navbar}>
            <div className={style.leftContainer}>
                <h1>EcoMobiRent</h1>
            </div>
            <div className={style.rightContainer}>
                <button onClick={() => router.push('/Marketplace')}><h2>Marketplace</h2></button>
                <button onClick={() => router.push('/Pro')}><h2>Professional</h2></button>
                <button onClick={() => router.push('/About')}><h2>About us</h2></button>
                <button onClick={handleSignUp}><h2>SignUp</h2></button>
            </div>
        </div>
    );
}
