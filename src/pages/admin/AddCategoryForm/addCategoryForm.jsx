import { useState } from "react";
import { uploadMedia2 } from "../../../utils/mediauplord";
import axios from "axios";

export default function AddCategoryForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageuploading, setImageUploading] = useState(false);

  const token = localStorage.getItem("token");
  if (token == null) {
    window.location.href = "/login";
  }

  async function handleImageChange(e) {
    setImageUploading(true);
    const file = e.target.files[0];
    const preset = import.meta.env.VITE_UPLOAD_PRESET_CATEGORIES;
    const data = await uploadMedia2(file, preset);
    setImage(data.secure_url);
    setImageUploading(false);
  }

  function handleSubmit(e) {
    e.preventDefault(); //refesh wena nathi karanawa

    // Prepare category data
    const categoryData = {
      name,
      price,
      features: features.split(",").map((f) => f.trim()), // convert comma-separated features into array
      description,
      image, // You might need to handle file upload separately
    };

    console.log("Form submitted:", categoryData);

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/category", categoryData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-blue-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Add Category</h2>

        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-medium">
            Features (comma separated)
          </label>
          <input
            type="text"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            placeholder="e.g. Sunroof, Leather seats"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            rows="3"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        {/* Submit */}
        <button
          type="submit" 
          disabled={imageuploading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
