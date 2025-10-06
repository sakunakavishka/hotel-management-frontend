import { useState } from "react";
import { uploadMedia2 } from "../../../utils/mediauplord";
import axios from "axios";

export default function UpdateCategory({ row, onClose }) {
  const [name, setName] = useState(row?.name || "");
  const [price, setPrice] = useState(row?.price || 0);
  const [features, setFeatures] = useState(
    Array.isArray(row?.features) ? row.features.join(", ") : row?.features || ""
  );
  const [description, setDescription] = useState(row?.description || "");
  const [image, setImage] = useState(row?.image || null);
  const [imageUploading, setImageUploading] = useState(false);

  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImageUploading(true);

    try {
      const preset = import.meta.env.VITE_UPLOAD_PRESET_CATEGORIES;
      const data = await uploadMedia2(file, preset);
      console.log(data);
      setImage(data.secure_url);
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed!");
    } finally {
      setImageUploading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const categoryData = {
      name,
      price,
      features: features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f !== ""),
      description,
      image,
    };

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/category/${row.name}`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Updated successfully:", res.data);
        alert("Category updated successfully!");
        onClose(); // close modal after success
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update category!");
      });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        {/* Header with title and close button */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Update Category</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

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
          <label className="block font-medium">Features (comma separated)</label>
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
          {image && (
            <img
              src={image}
              alt="Category Preview"
              className="w-24 h-24 object-cover rounded mb-2"
            />
          )}
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
          disabled={imageUploading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {imageUploading ? "Uploading..." : "Update Category"}
        </button>
      </form>
    </div>
  );
}
