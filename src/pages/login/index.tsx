
/* eslint-disable react-hooks/exhaustive-deps */

// Dependencies / modules yang digunakan
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import Link from "next/link";

// Environment variable berisi nama NFT dalam format Hex dan policyID
const token1 = process.env.NEXT_PUBLIC_TOKEN_1;
const token2 = process.env.NEXT_PUBLIC_TOKEN_2;
const token3 = process.env.NEXT_PUBLIC_TOKEN_3;
const policyID = process.env.NEXT_PUBLIC_POLICY_ID;

export default function Login() {
  const router = useRouter();
  const { connected, wallet } = useWallet();
  const [message, setMessage] = useState<null | any>(null);
  const [colorMessage, setColorMessage] = useState<boolean>(true);
  // Jika true kondisi dimana hanya ada satu button login, jika false terdapat pilihan lebih dari satu button login
  const [buttonState, setButtonState] = useState<boolean>(true);
  const [assetsList, setAssetsList] = useState([
    { assetName: "", fingerPrint: "", policyId: "", quantity: "", unit: "" },
  ]);
  const membershipTypes = ["Silver", "Gold", "Platinum"];

  // Fungsi-fungsi di dalam useEffect akan selalu dieksekusi jika parameter connected terdapat perubahan
  useEffect(() => {
    clearStates();
    // Jika Cardano Wallet berhasil terhubung periksa credential NFT
    const element: any = document.getElementById("container_flex");
    if (connected && buttonState) {
      checkNftCredentials();
      element.classList.add("expanded");
    } else {
      element.classList.remove("expanded");
    }
  }, [connected]);

  // Fungsi merestart nilai dari parameter-parameter
  function clearStates() {
    setMessage(null);
    setButtonState(true);
    setAssetsList([
      { assetName: "", fingerPrint: "", policyId: "", quantity: "", unit: "" },
    ]);
  }

  // Fungsi untuk memeriksa credential NFT
  async function checkNftCredentials() {
    try {
      // Mendapatkan list token-token (FT / NFT) dari wallet yang terhubung
      const _assets = await wallet.getAssets();
      // console.log("ASSETS:", _assets);

      // Memfilter list token-token NFT yang sesuai dengan nama-nama token dan policyID yang sudah ditentukan di file environtment variable (.env)
      const filteredAsset: any = _assets.filter(
        (asset: { assetName: string; policyId: string }) =>
          (asset.assetName === token1 ||
            asset.assetName === token2 ||
            asset.assetName === token3) &&
          asset.policyId === policyID
      );
      // console.log("FILTERED ASSETS", filteredAsset);

      // Menyimpan list token-token NFT yang sudah di filter
      setAssetsList(filteredAsset);

      // Jika tidak ada / tidak ditemukan token NFT
      if (filteredAsset.length === 0) {
        // Menampilkan notifikasi tidak bisa login karena tidak memiliki NFT
        setMessage("Cannot login, token doesn't exist!");
        setColorMessage(false);
        return;
      }
      // Jika hanya ada satu token NFT
      else if (filteredAsset.length === 1) {
        // Menampilkan notifikasi selamat datang member dan diizinkan untuk bisa login
        const assetName = filteredAsset[0].assetName;
        let membershipType = "";

        // Nama token sesuai membership
        if (assetName === token1) {
          membershipType = "Silver Member";
        } else if (assetName === token2) {
          membershipType = "Gold Member";
        } else if (assetName === token3) {
          membershipType = "Platinum Member";
        }

        const text = `Welcome ${membershipType}`;
        setMessage(text);
        setColorMessage(true);
        setButtonState(true);
      }
      // Jika ada lebih dari satu token NFT
      else {
        // Menampilkan selamat datang dan diizinkan untuk login dengan memilih membership-nya
        setMessage("Welcome, choose your membership");
        setColorMessage(true);
        setButtonState(false);
      }
    } catch (error) {
      console.error("Error fetching assets:", error);
      setMessage("Error when connect wallet!");
      setColorMessage(false);
    }
  }

  // Fungsi menangani login
  function loginHandler() {
    try {
      if (!colorMessage) {
        return;
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error when login process!");
      setColorMessage(false);
    }
  }

  function route_login(): void {
    router.push('/login');
  }

  // User Interface
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <div id="container1" className="relative mx-auto w-11/12 max-h-[20rem] grid grid-cols-2">
        <div className="relative flex-row top-72 left-32">
          <div className="text-7xl text-white font-black mb-3"> Get Started!</div>
          <div className="pl-1 text-lg text-white">Simply connect your wallet to get started!</div>
        </div>
        <div className="">
          <div id="container_flex" className="relative bg-white flex-col place-self-center w-3/5 rounded-xl p-4">
            {connected ? (
              <p className="text-center h-20 text-2xl font-black text-green-500">
                Wallet connected!
              </p>
            ) : (
              <p className="text-center h-20 text-2xl font-black text-black">
                Wallet not connected.
              </p>
            )}

            {/* Komponen Cardano Wallet */}
            <div className="flex justify-center item-center mb-8 scale-[165%]">
              <CardanoWallet label="Connect your Wallet" />
            </div>
            {/* Notifikasi status koneksi wallet */}

            {/* Notifikasi jika tidak bisa login muncul pesan teks berwarna merah */}

            {buttonState ? (
              // kondisi dimana hanya terdapat satu button login
              <p className="text-center h-10 text-red-500 text-xl">{message}</p>
            ) : (
              // kondisi dimana hanya terdapat lebih dari satu button login
              <div>
                {colorMessage ? (
                  <p className="text-center h-10 text-green-500 text-xl">{message}</p>
                ) : (
                  <p className="text-center h-10 text-red-500 text-xl">{message}</p>
                )}

                {assetsList.map((asset, index) => (
                  <div key={index} className="flex justify-center items-center">
                    {/* <button
                      type="button"
                      className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 text-white font-bold rounded-xl w-3/4 h-10 text-lg mb-2"
                      onClick={loginHandler}
                    >
                      Login as{" "}
                      {asset.assetName === token1
                        ? "Silver Member"
                        : asset.assetName === token2
                          ? "Gold Member"
                          : "Platinum Member"}
                    </button> */}
                    <Link href={{ pathname: '/dashboard', query: { membership: membershipTypes[index] } }} className="transition bg-[#00aaff] ease-in-out duration-500 hover:bg-[#9900ff] hover:scale-110 text-white font-bold text-center pt-1 rounded-xl w-3/4 h-10 text-lg mb-2">
                      Login as{" "}
                      {asset.assetName === token2
                        ? "Silver Member"
                        : asset.assetName === token1
                          ? "Gold Member"
                          : "Platinum Member"}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
