import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function route_login(): void {
    router.push('/login');
  }

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <div id="bg"></div>
      <div id="header" className="flex justify-between p-10 px-16 text-white z-20">
        <a className="relative mr-5 flex-none text-4xl font-bold top-1" href="/">Cardano SafeTx</a>
        <div className="flex gap-5 place-self-end text-xl">
          <a className="p-3" href="">About</a>
          <a className="p-3" href="">Support</a>
          <button id="b" className="relative text-white font-bold rounded-xl w-32 h-10 top-[0.4rem]" onClick={route_login}>Log In</button>
        </div>
      </div>
      <div className="absolute flex inset-0 top-1/3 left-[10%]">
        <div className="mx-5 h-72 w-[45rem] text-wrap pt-40">
          <p data-name="animate" className="text-8xl font-bold text-white mb-8">Cardano SafeTx</p>
          <p data-name="animate" className="text-lg text-white mb-10 pl-2">
            Cardano SafeTx is a brand new website to make Cardano cryptocurrency transactions.
            You can do anything related with Cardano Cryptocurrency, such as balance transfers, balance receiving, NFT selling, all you can do in one
            website. It's a very simple looking website, yet it fits all your needs and it is very user friendly and easy to use. To get started, it's as simple
            as connecting your dApp wallet with a browser extension!
          </p>
        </div>
        <div className="mx-5 h-[32rem] w-[32rem] text-wrap">
          <Image id="img" src="/cardano.webp" alt="cardano" width={512} height={512} className="relative rounded-full border-8 inset-0 left-52" />
        </div>
      </div>
      <div className="absolute flex inset-0 top-[70rem] left-[10%]">
        <div className="mx-5 h-[32rem] w-[40rem] text-wrap">
          <Image id="anim-img" src="/eternl.png" alt="cardano" width={400} height={400} className="absolute rotate-[-25deg] inset-0 -left-10 bg-white rounded-full z-10" />
          <Image id="anim-img" src="/lace.jpg" alt="cardano" width={300} height={300} className="absolute inset-0 left-64 top-16 rotate-[15deg] bg-white rounded-full" />
        </div>
        <div className="mx-5 h-72 w-[45rem] text-wrap pt-24">
          <p data-name="animate" className="text-8xl font-bold text-white mb-8">What is dApp?</p>
          <p data-name="animate" className="text-lg text-white mb-10 pl-2">
            A decentralized application (dApp) is a software application that runs on a blockchain or a distributed network of computers rather than relying on a single centralized server. These applications leverage the features of decentralization, transparency, and security provided by the underlying blockchain or distributed ledger technology.
            Specifically for this case, wallets such as Eternl or Lace is recommended.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 top-[120rem]">
        <p className="text-transparent">a</p>
      </div>
    </div>
  );
}
