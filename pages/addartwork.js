import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as db from "firebase/database";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../firebase/clientApp";


const database = db.getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


export default function AddArtwork() {
  const { status, data } = useSession();
  const router = useRouter();

  const [artInfo, setArtInfo] = useState({ artname: '', artdescription: '', image: null });
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "authenticated") {
    const addartwork = (e) => {
      setArtInfo({});
      e.preventDefault();
      const storageRef = ref(storage, `artworks/${artInfo.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, artInfo.image)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
        },
        () => {
          console.log("upload complete")
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            db.set(db.ref(database, 'artworks/' + artInfo.artname), {
              name: artInfo.artname,
              description: artInfo.artdescription,
              url: url
            })
          })
        },
      )


    }

    const handleSelectedFile = (file) => {
      setArtInfo({ ...artInfo, image: file[0] })
    }

    return (
      <div className="flex justify-center content-center h-screen">
        <form onSubmit={addartwork} className="flex flex-col p-20 bg-ctp-crust">
          <h1 className="text-center">Add Artwork</h1>
          <span htmlFor="artwork-name">Name of Artwork:</span>
          <input required onChange={({ target }) => {
            setArtInfo({ ...artInfo, artname: target.value })
          }} name="artwork-name" />
          <span htmlFor="artwork-description">Description of Artwork:</span>
          <textarea required onChange={({ target }) => {
            setArtInfo({ ...artInfo, artdescription: target.value })
          }} name="artwork-description" rows="4" />
          <input required type='file' onChange={(files) => handleSelectedFile(files.target.files)} />

          <input type="submit" value="Submit" className="bg-ctp-blue" />
        </form>

        <div className="mt-5">
          <div>
            {artInfo.image && (
              <>
                <p percent={progressUpload} />
              </>
            )}

            {downloadURL && (
              <>
                <p>{downloadURL}</p>
              </>
            )}
            <p></p>
          </div>
        </div>


      </div>
    );
  }

  return <div>Loading...</div>

}
