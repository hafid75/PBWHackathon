import "@/styles/globals.css";
import { useRouter } from "next/router";
import { XRPLProvider } from "@/contexts/xrpContext";
import Home from ".";

export default function App() {
  const router = useRouter();

  return (
    <XRPLProvider>
        {router.pathname === '/' && <Home />}
    </XRPLProvider>
  );
}