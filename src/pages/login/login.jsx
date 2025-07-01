import './login.css';
import { useState } from 'react';
export default function LoginPage(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleLogin(){
        console.log(email,password);
    }

    return (
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
            <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative ">
            <h1 className="text-white text-center text-3xl p-[15px] absolute top-[40px] ">Login</h1>

            <input type='text' placeholder='Enter Your Email Address' 
            className='w-[80%] bg-[#00000000] border-[2px] text-white
             placeholder:text-white h-[50px] px-[5px] mb-[5px]' 
             defaultValue={email}
             onChange={
                (e) => {
                    setEmail(e.target.value)
                }
            } 
             />

            <input type='password' placeholder='Enter Your Password'
             className='w-[80%] bg-[#00000000] border-[2px] text-white
              placeholder:text-white h-[50px] px-[5px] mb-[5px]'
              defaultValue={password}
              onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
              }
              />

            <button className='w-[80%] bg-red-500 text-white h-[50px] rounded-lg hover:bg-red-600 absolute bottom-[40px] '
            onClick={handleLogin}>Login</button>
            </div>
        </div>
    )

}