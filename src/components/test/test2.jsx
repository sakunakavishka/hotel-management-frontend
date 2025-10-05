import { useState } from "react"
import {uploadMedia2} from "../../utils/mediauplord.js"


export default function TestComponent2(){
   const [file, setFile] = useState(null);
   const [file2,setFile2] = useState(null);
   const [url, setUrl] = useState("");
   const [url2, setUrl2] = useState("");
   const preset2=import.meta.env.VITE_UPLOAD_PRESET2
 async function uploadMedia(file) {
     const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      setUrl(data.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
    }
  }
    return(
        <div className="bg-indigo-300 w-full h-[100vh] flex justify-center items-center">
            
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button
              onClick={() => uploadMedia(file)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Upload Image
            </button>
            {url && <img src={url} alt="Uploaded" className="w-48 mt-4" />}
            <input type="file" onChange={(e) => setFile2(e.target.files[0])} />
            <button
              onClick={() => uploadMedia2(file2,preset2,setUrl2)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Upload Image
            </button>
            {url2 && <img src={url2} alt="Uploaded" className="w-48 mt-4" />}
            
        </div>
    )
}
