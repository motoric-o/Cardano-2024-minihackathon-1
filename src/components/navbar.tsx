import Link from "next/link";
import { useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { connected, wallet, name } = useWallet();
    const [addressState, setAddressState] = useState<boolean>(true);
    const [balance, setBalance] = useState<string>("");

    useEffect(() => {
        if (connected) {
            setAddressState(true);
            getBalance();
        } else {
            setAddressState(false);
        }
    }, [connected]);

    async function getBalance() {
        const value = await wallet.getBalance();
        setBalance(value[0]["quantity"]);
    }

    function onProfileClick() {
        const element: any = document.getElementById("profile");
        if (connected) {
            navigator.clipboard.writeText(element.textContent);
        } else {

        }
    }

    function onHover() {
        const element: any = document.getElementById("profile");
        element.textContent = parseInt(balance) / 1000000;
    }

    function onLeave() {
        const element: any = document.getElementById("profile");
        element.textContent = "";
    }

    return (
        <div id="navbar" className="flex justify-between p-10 px-16 text-white z-20 font-[family-name:var(--font-geist-sans)]">
            <a className="relative mr-5 flex-none text-4xl font-bold top-1" href="/">Cardano Web3Tx</a>
            <div className="flex gap-5 place-self-end text-xl">
                <a className="p-3" href="">About</a>
                <a className="p-3" href="">Support</a>
                {addressState ? (
                    <button id="profile" className="bg-white relative text-black text-center p-2 font-bold rounded-full top-[0.4rem] overflow-hidden" onMouseEnter={onHover} onMouseLeave={onLeave} onClick={onProfileClick}></button>
                ) : (
                    <a href="/login" className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 relative text-white text-center p-1 font-bold rounded-xl w-32 h-10 top-[0.4rem]">Log In</a>
                )}

            </div>
        </div>
    );
}