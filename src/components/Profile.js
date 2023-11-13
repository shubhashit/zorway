import React, { useContext } from 'react'
import profilepic from '../assets/profilepic.webp'
import { AuthContext } from './Usercontext'
import { getAuth, signOut } from 'firebase/auth';
import { app } from './Backend';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const currentUser = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(currentUser)
    async function Logout() {
        try {
            const auth = getAuth(app);
            await signOut(auth);
            navigate('/signup')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {
                currentUser.currentUser &&
                <div className='h-fit sm:h-[100vh] w-[100vw] bg-[#1b1c31] flex flex-col md:flex-row md:p-4 sm:overflow-x-hidden '>
                    <div className='items-center md:hidden w-[100vw] h-20 text-white p-2 flex flex-row justify-between'>
                        <div className='flex flex-row items-center'>
                            <img src={profilepic} className='h-10 w-10 mr-4' alt="" />
                            <div className='flex flex-col items-start w-[70%]'>
                                    <div className='text-lg font-medium text-start md:text-base'>{currentUser.currentUser.displayName}</div>
                                <div className='text-slate-300 text-sm text-start w-full' >{currentUser.currentUser.email}</div>
                                <div className='text-slate-300 text-sm text-start w-full cursor-pointer' onClick={Logout}>Logout</div>
                            </div>
                        </div>

                    </div>
                    <div className='rounded-3xl text-white w-1/4 bg-[#0d0e23]  flex-col p-4  hidden md:block '>

                        <div className='flex flex-row items-center'>
                            <img src={profilepic} className='h-10 w-10 mr-4' alt="" />
                            <div className='flex flex-col items-start w-[70%]'>
                                <div className='text-xl font-medium text-start md:text-base'>{currentUser.currentUser.displayName}</div>
                                <div className='text-slate-300 md:text-sm text-start w-full' style={{ "overflowWrap": "anywhere" }}>{currentUser.currentUser.email}</div>
                                <div className='text-slate-300 md:text-sm text-start w-full cursor-pointer' onClick={Logout}>Logout</div>
                            </div>
                        </div>

                            <div className='text-lg font-medium  mt-8' style={{ "overflowWrap": "anywhere" }}>Userid - {currentUser.currentUser.uid}</div>
                    </div>
                </div>
            }
        </>
    )
}
