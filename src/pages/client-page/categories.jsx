import { useEffect, useState } from "react";
import axios from "axios";


export default function CategoriesPage() 
{
    
const [categories,setCategories] = useState([])
const[categoriesLoaded,setCategoriesLoaded] = useState(false)
// const [isModelOpen, setIsModelOpen] = useState(false);
  useEffect(
    ()=>{

      if(!categoriesLoaded)
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then((res)=>{
            setCategories(res.data.categories);
            setCategoriesLoaded(true);
        })
    },[categoriesLoaded]
  )

  function deleteItem(name){
    // setIsModelOpen(true);
    axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name).then
    ((res) => {
        setCategoriesLoaded(false)
    });
    
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price ($)</th>
              <th className="px-4 py-2 text-left">Features</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {
            categories.map((category, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">
                  <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2 font-medium">{category.name}</td>
                <td className="px-4 py-2">${category.price}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc ml-5 space-y-1">
                    {category.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2">{category.description}</td>
                <td className="px-4 py-2">

                  <button onClick={
                    () => {
                        deleteItem(category.name)
                        }
                    }
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
{/* {
  isModelOpen &&(

    <div className="w-full h-[100vh] bg-[#00000055] top-0 left-0 fixed flex justify-center items-center">
      <span className="text-white">MOdel</span>

    </div>
  )
} */}

      </div>
    </div>
  );
}

