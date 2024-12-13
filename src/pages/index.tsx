import Image from "next/image";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function route_login(): void {
    router.push('/login');
  }

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <div id="bg"></div>
      <div id="header" className="flex justify-between p-6 bg-white text-black z-0">
        <a className="relative mr-5 flex-none text-4xl font-bold top-1" href="/">Cardano SafeTx</a>
        <div className="flex gap-5 place-self-end text-xl">
          <a className="p-3">About</a>
          <button id="b" className="relative text-white font-bold rounded-xl w-32 h-10 top-[0.4rem]" onClick={route_login}>Log In</button>
        </div>
      </div>
      <div className="flex absolute inset-0 top-64 left-44">
        <div className="mx-5 h-72 w-[45rem] text-wrap pt-20">
          <p className="text-6xl font-bold text-white mb-5">Cardano SafeTx</p>
          <p className="text-xl text-white mb-10">
            What is Cardano SafeTx? Cardano SafeTx is a brand new website to make Cardano cryptocurrency transactions.
            Everything related to Cardano, transfers, NFTs, all in one website and very easy to use! To get started, it's as simple
            as logging in or signing up!
          </p>
          <button id="b" className="px-2 text-white font-bold rounded-xl w-36 h-14 text-xl" onClick={route_login}>Get Started</button>
        </div>
        <div className="mx-5 h-[32rem] w-[32rem] text-wrap">
          <Image src="/cardano.webp" alt="cardano" width={512} height={512} className="relative rounded-full border-8 inset-0 left-52" />
        </div>
      </div>
    </div>
  );
}
