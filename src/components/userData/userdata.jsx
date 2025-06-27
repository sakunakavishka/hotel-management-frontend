

function UserTag(props){

    return(
       <div className="absolute right-0 flex bg-blue-500 items-center cursor-pointer"> 
        <img className="rounded-full w-[75px] h-[75px]" src= {props.imageLink}alt="user image"  />
       <span className="text-white ml-[5px] mr-[5px] text-xl ">{props.name}</span>
        </div>
    )
}
export default UserTag;