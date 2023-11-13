import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import bg from '../assets/wallpaper.jpg'
import { app } from './Backend';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
    const password = useRef()
    const email = useRef();
    const navigate = useNavigate()
    let dark = false;
    async function OnLogin() {
        const auth = getAuth(app);
        try {
            const Email = email.current.value;
            const Password = password.current.value;
            console.log(email)
            console.log(Email , Password)
            const userCredential = await signInWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            console.log(user)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    function tosignup(){
        navigate('/signup')
    }
    return (
        <>
            <div className='w-[100vw] h-[100vh] border border-black loginbg md:block hidden' >

                <div className={`h-[100vh] w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 pl-12  opacity-80`} >
                    <div className='relative flex justify-end '><img src="" className='m-4 cursor-pointer' alt="" /></div>
                    <div className='mt-12 flex flex-col justify-start items-start'>

                        <div className='text-5xl font-bold text-[#696DCA] mb-2'  >Login</div>
                        <div className='text-[#696DCA] font-semibold text-lg mb-4 cursor-pointer' onClick={tosignup}>or create your account</div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                            <input ref={email} type="email" placeholder='Email' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} />
                        </div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                            <input ref={password} type="password" placeholder='Password' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} />
                        </div>
                        <div><button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8' onClick={OnLogin}>Login</button></div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center justify-center cursor-pointer`}>
                            <img src="" className='mr-3 h-[2.5rem]' alt="" />
                            <div className={`font-bold ${dark ? "text-white" : "text-black"}`}>Login with Google</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
