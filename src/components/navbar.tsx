import Link from "next/link";
import { useWallet, useAddress } from "@meshsdk/react";
import { useEffect } from "react";

export default function Navbar() {
    const { connected, wallet } = useWallet();
    const address = useAddress();

    return (
        <div id="navbar" className="flex justify-between p-10 px-16 text-white z-20 font-[family-name:var(--font-geist-sans)]">
            <a className="relative mr-5 flex-none text-4xl font-bold top-1" href="/">Cardano Web3Tx</a>
            <div className="flex gap-5 place-self-end text-xl">
                <a className="p-3" href="">About</a>
                <a className="p-3" href="">Support</a>
                {address ? (
                    <a href="/" className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 relative text-white text-center p-1 font-bold rounded-xl w-32 h-10 top-[0.4rem]">{address}</a>
                ): (
                    <a href="/login" className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 relative text-white text-center p-1 font-bold rounded-xl w-32 h-10 top-[0.4rem]">Log In</a>
                )}
                
            </div>
        </div>
    );
}