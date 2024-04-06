import "@/styles/globals.css";
import { useRouter } from "next/router";
import { XUMMProvider } from "@/contexts/xummContext";
import Home from ".";
import Marketplace from './marketplace';
import Professional from './professional';

export default function App() {
  const router = useRouter();

  return (
    <XUMMProvider>
        {router.pathname === '/' && <Home />}
        {router.pathname === '/marketplace' && <Marketplace />}
        {router.pathname === '/professional' && <Professional />}
    </XUMMProvider>
  );
}