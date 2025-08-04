import axios from "axios";
import { useEffect, useState } from "react";

function UserTag(props){

const [name , setName] = useState("");

const [userfound , setUserFound] = useState(false);



   //useEffect ( funtion , [] )

     useEffect(
      ()=>{

        const token = localStorage.getItem("token")

       if (token !=null){
        console.log(token);
        axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setName(res.data.user.firstName + " " + res.data.user.lastName);
        setUserFound(true);
      })
    }else {
        setName("")
      }
    },[userfound]
  );

    return(
       <div className="absolute right-0 flex bg-blue-500 items-center cursor-pointer"> 
        <img className="rounded-full w-[75px] h-[75px]" src= {props.imageLink}alt="user image"  />
       <span className="text-white ml-[5px] mr-[5px] text-xl ">{name}</span>

        <button onClick={
          ()=>{
            localStorage.removeItem("token")
            const token = localStorage.getItem("token")
            setUserFound(false);

          }}>
            Logout </button>

        </div>
    )
}
export default UserTag;