import { useWallet } from "@meshsdk/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { connected } = useWallet();
  const params = useSearchParams();
  const router = useRouter();

  const membership = params.get("membership");
  
  useEffect(() => {
    if (!connected) {
      router.push("/login");
    }
  }, [connected]);

  return (
    <h1 className="flex justify-center items-center h-screen text-4xl font-bold">
      Welcome {membership} Member
    </h1>
  );
}
