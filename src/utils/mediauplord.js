

export async function uploadMedia2(file, preset) {
     const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data)
      return data;
      
      
    } catch (err) {
      console.error("Upload error:", err);
    }
  }



