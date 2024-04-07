import "@/styles/globals.css";
import { useRouter } from "next/router";
import { XUMMProvider } from "@/contexts/xummContext";
import Home from ".";

export default function App() {
  const router = useRouter();

  return (
    <XUMMProvider>
        {router.pathname === '/' && <Home />}
    </XUMMProvider>
  );
}