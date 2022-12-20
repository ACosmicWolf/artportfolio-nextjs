import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AddArtwork() {
  const { status, data } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "authenticated") {
    return (
      <div>
        Protected Page
      </div>
    );
  }

  return <div>Loading...</div>

}
