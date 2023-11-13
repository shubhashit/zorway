import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import bg from '../assets/wallpaper.jpg'
import { app } from './Backend';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { AuthContext, MyContext } from './Usercontext';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Signup() {
    const currentUser = useContext(AuthContext)
    console.log(currentUser)
    const navigate = useNavigate();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    let dark = false;
    async function OnSignup() {
        let Email = email.current.value;
        let Username = username.current.value;
        let Password = password.current.value;
        const auth = getAuth(app);
        const db = getFirestore(app);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            user.displayName = Username;
            await setDoc(doc(db, "user", user.uid), { Username, Email });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    async function GoogleSignup(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const db = getFirestore(app);
        provider.setCustomParameters({
            prompt: "select_account"
        });
        try {
            const result = await signInWithPopup(auth, provider)
            // .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // setUser(user)
            localStorage.setItem("user", user);
            console.log(user);
            console.log(token);
            
            const data = { "Username": user.displayName, "Email": user.email }
            await setDoc(doc(db, "user", user.uid), data);
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }
    function tologin() {
        navigate('/login');
    }
    return (
        <>
            <div className='w-[100vw] h-[100vh] border border-black loginbg md:block hidden overflow-hidden' >

                <div className={`h-[100vh] w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 pl-12  opacity-80`} >
                    <div className='relative flex justify-end '><img src="" className='m-4 cursor-pointer' alt="" /></div>
                    <div className='mt-12 flex flex-col justify-start items-start'>

                        <div className='text-5xl font-bold text-[#696DCA] mb-2'  >Sign up</div>
                        <div className='text-[#696DCA] font-semibold text-lg mb-4 cursor-pointer' onClick={tologin}>or log into your account</div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                            <input ref={username} type="text" placeholder='Username' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} />
                        </div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                            <input ref={email} type="email" placeholder='Email' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} />
                        </div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                            <input ref={password} type="password" placeholder='Password' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} />
                        </div>
                        <div><button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8' onClick={OnSignup}>Signup</button></div>
                        <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center justify-center cursor-pointer`}>
                            <img src="" className='mr-3 h-[2.5rem]' alt="" />
                            <div className={`font-bold ${dark ? "text-white" : "text-black"}`} onClick={GoogleSignup}>Sign up with Google</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
