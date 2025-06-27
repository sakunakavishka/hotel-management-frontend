import Header from "../../components/header/header";

export default function HomePage() {
    return(
        <>
        <Header></Header>
      <div className="w-full h-screen bg-blue-900 flex flex-col items-center">
      <div className = "border border-white bg-white w-[700px] h-[100px] rounded-lg flex justify-center items-center" >

        <input type ="date"/>
        <input type = "date"/>

        <select>
          <option >Luxury</option>
          <option >Normal</option>
          <option >Low</option>

        </select>
        <botten>Book Now</botten>
        </div>
        <h1 className="text-white text-[50px]">welcome to the leonine villa in kadawatha</h1>
      </div>
        </>
    )
}