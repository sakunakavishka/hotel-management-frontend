import { Link, Route, Routes } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineRoom, MdFeedback } from "react-icons/md";
import { FaUsers, FaImages } from "react-icons/fa";
import AdminBooking from "../admin/Bookings/adminbooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItems from "../admin/galleryitems/galleryitems";
import AdminUsers from "../admin/users/users";
import AdminRooms from "../admin/rooms/rooms";
export default function AdminPage() 
{

return (
<div className="w-full max-h-[100vh] overflow-hidden flex">  
    
      {/* Sidebar */}
      <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col gap-6 p-4">

        <Link to="/admin/bookings" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <CiBookmark size={26} />
          Bookings
        </Link>

        <Link to="/admin/categories" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <MdOutlineCategory size={26} />
          Categories
        </Link>

        <Link to="/admin/rooms" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <MdOutlineRoom size={26} />
          Rooms
        </Link>

        <Link to="/admin/users" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <FaUsers size={26} />
          Users
        </Link>

        <Link to="/admin/feedback" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <MdFeedback size={26} />
          Feedback
        </Link>

        <Link to="/admin/gallery-item" className="flex items-center gap-2 text-white text-[24px] hover:font-bold">
          <FaImages size={26} />
          Gallery Items
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-900 ">
        {/* Place your <Routes> or other content here */}

    <Routes path="/*">
    <Route path="/bookings" element={<AdminBooking/>}/>
    <Route path="/categories" element={<AdminCategories/>}/>
    <Route path="/rooms" element={<AdminRooms/>}/> 
    <Route path="/users" element={<AdminUsers/>}/>
    <Route path="/feedback" element={<AdminFeedback/>}/>
    <Route path="/gallery-item" element={<AdminGalleryItems/>}/>
    </Routes>

      </div>
    </div>

    )
}