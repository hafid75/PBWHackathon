import React, { createContext, useContext, useState, useEffect } from 'react';
import { xrpToDrops } from 'xrpl';
import { Xumm } from 'xumm';

interface xummContextType {
    xummClient: Xumm | undefined;
    userWallet: string | undefined;
    connectWallet: () => Promise<boolean | undefined>;
    disconnectWallet: () => Promise<null>;
}

const XUMMContext = createContext<xummContextType | undefined>(undefined);

export const useXUMM = () => {
    const context = useContext(XUMMContext);
    if (!context) {
        throw new Error('useXumm must be used within a Xumm Provider');
    }
    return context;
};

export const XUMMProvider: ({ children }: any) => React.JSX.Element = ({ children }: any) => {
    const [xummClient, setXummClient] = useState<Xumm | undefined>(undefined);
    const [userWallet, setUserWallet] = useState<string | undefined>(undefined);

    const connectWallet = async () => {
        console.log("try to connect a wallet");
        try {
            console.log("enter into try");
            const auth = await xummClient?.authorize();
            console.log("tryed to autorize with the value:", auth);
            const userWalletAddress = auth ? await xummClient?.user?.account : undefined;
            userWalletAddress !== undefined && setUserWallet(userWalletAddress);
            return (userWalletAddress !== undefined && userWalletAddress?.length > 0 ? true : false);
        } catch (error) {
            console.log("error into connect wallet:", error);
            return (undefined);
        }
    }

    const disconnectWallet = async () => {
        try {
            const disconnection = await xummClient?.logout();
            console.log("disconnect from userWallet:", disconnection);
            return (null);
        } catch (error) {
            console.log("error from disconnectWallet:", error);
            return (null);
        }
    }

    const makePayment = async () => {
        try {
            const tsx = await xummClient?.payload?.create({
                TransactionType: 'Payment',
                Destination: 'rfHn6cB5mmqZ6fHZ4fdemCDSxqLTijgMwo',
                Amount: xrpToDrops(10)
            })
        } catch (error) {
            console.log("error during transaction:", error);
        }
    }

    useEffect(() => {
        if (xummClient !== undefined && xummClient?.user) {
            console.log("wallet connected:", xummClient?.user);
        } else {
            console.log("wallet not connected");
        }
        return () => {
            if (xummClient !== undefined) {
                disconnectWallet();
                console.log("client Disconnected");
            } else {
                console.log("xummClient not found");
            }
        };
    }, [xummClient]);

    useEffect(() => {
        const initializeXUMMClient = async () => {
            const client = new Xumm("5c57763d-f552-45a0-87f2-5ec47503f511", "1702803d-2b0f-45e2-b45c-edb36108abac");
            client && setXummClient(client);
        }

        initializeXUMMClient();
    }, []);

    return (
        <XUMMContext.Provider value={{ xummClient, connectWallet, disconnectWallet, userWallet }}>
            {children}
        </XUMMContext.Provider>
    );
};