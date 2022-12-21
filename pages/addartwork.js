import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddArtwork() {
  const { status, data } = useSession();
  const router = useRouter();

  const [artInfo, setArtInfo] = useState({ artname: '', artdescription: '' });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "authenticated") {

    const addartwork = (e) => {
      e.preventDefault();
      console.log(artInfo);
    }
    return (
      <div className="flex justify-center content-center h-screen">
        <form onSubmit={addartwork} className="flex flex-col p-20 bg-ctp-crust">
          <h1 className="text-center">Add Artwork</h1>
          <span htmlFor="artwork-name">Name of Artwork:</span>
          <input onChange={({ target }) => {
            setArtInfo({ ...artInfo, artname: target.value })
          }} name="artwork-name" />
          <span htmlFor="artwork-description">Description of Artwork:</span>
          <textarea onChange={({ target }) => {
            setArtInfo({ ...artInfo, artdescription: target.value })
          }} name="artwork-description" rows="4" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  return <div>Loading...</div>

}
