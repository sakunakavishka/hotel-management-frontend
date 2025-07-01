import { useState } from "react"

export default function TestComponent(){

const[num,setNum]=useState(0);


    return(
        <div className="bg-indigo-300 w-full h-[100vh] flex justify-center items-center">
            <div className="bg-red-300 w-[350px] h-[350px] flex justify-center items-center">
                <button className="w-[60px] h-[60px] bg-blue-600 rounded-full text-white text-2xl text-center"
                onClick={
                    ()=>{
                        const newNum = num -1;
                        setNum(newNum)
                    }
                }
                > - </button>
                
                <span className="text-6xl">{num}</span>

                <button className="w-[60px] h-[60px] bg-red-600 rounded-full text-white text-2xl text-center"
                onClick={
                    ()=>{
                        const newNum = num + 1;
                        setNum(newNum)
                    }
                }
                > + </button>

                
            </div>

        </div>
    )
}