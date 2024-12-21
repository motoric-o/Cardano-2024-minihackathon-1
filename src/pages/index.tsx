import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function route_login(): void {
    router.push('/login');
  }


  // window.addEventListener("load", () => {
  //   for (let i=0; i < 4; i++) {
  //     const element = document.getElementById('home_transition'+i)
  //     element?.classList.add("-translate-y-5");
  //   }
  // });

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="absolute flex inset-0 top-1/3 left-[10%]">
        <div id="scroll" className="mx-5 h-72 w-[45rem] text-wrap mt-36">
          <p data-name="animate" className="text-8xl font-bold text-white mb-8">Cardano Web3Tx</p>
          <p data-name="animate" className="text-lg text-white mb-10 pl-2">
            Cardano Web3Tx is a brand new website to make Cardano cryptocurrency transactions.
            You can do anything related with Cardano Cryptocurrency, such as balance transfers, balance receiving, NFT selling, all you can do in one
            website. It's a very simple looking website, yet it fits all your needs and it is very user friendly and easy to use. To get started, it's as simple
            as connecting your dApp wallet with a browser extension!
          </p>
        </div>
        <div id="scroll" className="mx-5 h-[32rem] w-[32rem] text-wrap">
          <Image id="img" src="/cardano.webp" alt="cardano" width={512} height={512} className="relative rounded-full border-8 inset-0 left-52" />
        </div>
      </div>
      <div className="absolute flex inset-0 top-[70rem] left-[10%]">
        <div id="scroll" className="mx-5 h-[32rem] w-[40rem] mr-28">
          <Image id="anim-img" src="/eternl.png" alt="cardano" width={400} height={400} className="absolute inset-0 -left-10 bg-white rounded-full z-10" />
          <Image id="anim-img1" src="/lace.jpg" alt="cardano" width={300} height={300} className="absolute inset-0 left-64 top-16 bg-white rounded-full" />
        </div>
        <div id="scroll" className="mx-5 h-72 w-[45rem] text-wrap mt-28">
          <p data-name="animate" className="text-8xl font-bold text-white mb-8">What is dApp?</p>
          <p data-name="animate" className="text-lg text-white mb-10 pl-2">
            A decentralized application (dApp) is a software application that runs on a blockchain or a distributed network of computers rather than relying on a single centralized server. These applications leverage the features of decentralization, transparency, and security provided by the underlying blockchain or distributed ledger technology.
            Specifically for this case, wallets such as Eternl or Lace is recommended.
          </p>
        </div>
      </div>
      <div id="scroll" className="absolute flex-row inset-0 top-[150rem] justify-center justify-items-center w-full">
        <div className="text-8xl text-white font-black mb-8"> What are you waiting for?</div>
        <button className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 relative text-white font-bold text-3xl rounded-xl w-72 h-16 top-[0.4rem]" onClick={route_login}>Get Started!</button>
      </div>
      <div className="absolute inset-0 top-[200rem] justify-center justify-content-center w-full">
        <p className="text-transparent">a</p>
      </div>
    </div>
  );
}
