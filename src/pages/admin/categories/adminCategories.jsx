import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminCategories() {

  const token = localStorage.getItem("token");
  if (token==null){
    window.location.href = "/login"
  }  

  

  const [categories, setCategories] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  useEffect(() => {
    if (!categoriesLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          setCategories(res.data.categories);
          setCategoriesLoaded(true);
        })
        .catch((err) => {
          console.error("Error fetching categories:", err);
        });
    }
  }, [categoriesLoaded]);

  function handleDelete (name){
    axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/category/"+name, {
      headers:{
        Authorization: "Bearer "+token
      }
      }).then((res)=>{
        setCategoriesLoaded(false)
        toast.success("Category deleted successfully");
      }).catch((err)=>{
         toast.error("Failed to delete category");
      })
  }

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Features</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={category._id || index} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{category.name}</td>
                  <td className="px-4 py-2 border">${category.price}</td>
                  <td className="px-4 py-2 border">
                    {category.features?.length > 0 ? (
                      <ul className="list-disc list-inside text-left">
                        {category.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      "No features"
                    )}
                  </td>
                  <td className="px-4 py-2 border">{category.description}</td>
                  <td className="px-4 py-2 border">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td className="px-4 py-2 border flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(category._id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(category.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center px-4 py-4 border text-gray-500"
                >
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
