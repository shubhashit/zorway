import React, { useContext, useEffect, useState } from 'react'
import profilepic from '../assets/profilepic.webp'
import Timetable from './Timetable'
import { AuthContext, MyContext } from './Usercontext'
import ham from '../assets/ham.svg'
import { useNavigate } from 'react-router-dom'
// 2c2c4e
// rightbod
// 24243c
// e08cd6
export default function Dashboard() {
    const currentUser = useContext(AuthContext)
    const navigate = useNavigate();
    const email = currentUser.currentUser.email;
    console.log(email)
    const [today, setToday] = useState(new Date());
    const S1 = 35;
    const S2 = 32;
    const S3 = 40;
    const S4 = 33;
    const S5 = 34;
    const [S1p , setS1p] = useState(0);
    const [S2p , setS2p] = useState(0);
    const [S3p , setS3p] = useState(0);
    const [S4p , setS4p] = useState(0);
    const [S5p, setS5p] = useState(0);

    useEffect(() => {
        // Update the date when the component mounts
        setToday(new Date());
    }, []);

    // Extract year, month, and day
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    function Logout() {

    }
    function findPercent(e){
        console.log('object')
        console.log(e.target.value)
        console.log(e.target.id)
        if(e.target.id === "S1"){
            setS1p((e.target.value / S1)*100)
            let num = (e.target.value / S1) * 100
            num = Number(num.toFixed(2));
            setS1p(num)
            console.log(S1p)
        }
        if(e.target.id === "S2"){
            setS2p((e.target.value / S2)*100)
            let num = (e.target.value / S2) * 100
            num = Number(num.toFixed(2));
            setS2p(num)
            console.log(S2p)
        }
        if (e.target.id === "S3") {
            setS3p((e.target.value / S3) * 100)
            let num = (e.target.value / S3) * 100
            num = Number(num.toFixed(2));
            setS3p(num)
            console.log(S3p)
        }
        if(e.target.id === "S4"){
            setS4p((e.target.value / S4)*100)
            let num = (e.target.value / S4) * 100
            num = Number(num.toFixed(2));
            setS4p(num)
            console.log(S4p)
        }
        if(e.target.id === "S5"){
            setS5p((e.target.value / S5)*100)
            let num = (e.target.value / S5) * 100
            num = Number(num.toFixed(2));
            setS5p(num)
            console.log(S5p)
        }
    }
    function showMarksheets(){
        document.getElementById("marksheets").classList.remove("hidden")
        document.getElementById("marksheets").classList.add("flex")
    }
    function hideMarksheets(){
        document.getElementById("marksheets").classList.remove("flex")
        document.getElementById("marksheets").classList.add("hidden")
    }
    function toprofile(){
        console.log('object')
        navigate('/profile')
    }
    function openmarksheet() {
        window.open('https://firebasestorage.googleapis.com/v0/b/zorway-755c6.appspot.com/o/cc8f574f-0d2c-4d61-b32e-65f752cddc41.pdf?alt=media&token=5a0cd70e-dc41-4432-9122-719cc59b63b5', '_blank');
    }

    return (
        <div className='h-fit sm:h-[100vh] w-[100vw] bg-[#1b1c31] flex flex-col md:flex-row md:p-4 sm:overflow-x-hidden '>
            <div className='items-center md:hidden w-[100vw] h-20 text-white p-2 flex flex-row justify-between'>
                <div className='flex flex-row items-center cursor-pointer' onClick={toprofile}>
                    <img src={profilepic} className='h-10 w-10 mr-4' alt="" />
                    <div className='flex flex-col items-start w-[70%]'>
                        <div className='text-lg font-medium text-start md:text-base'>{currentUser.currentUser.displayName}</div>
                        <div className='text-slate-300 text-sm text-start w-full' >{email}</div>
                        <div className='text-slate-300 text-sm text-start w-full cursor-pointer' onClick={Logout}>Logout</div>
                    </div>
                </div>
                <div onClick={showMarksheets} className='w-8 h-8'>
                    {/* {ham} */}
                    <img src={ham} alt="" />
                </div>
                <div className=' flex-col items-start absolute top-0 right-0 z-10 bg-[#0d0e23] w-[80%] h-[100vh] p-3 rounded-l-xl pt-20 hidden' id='marksheets'> 
                    <div onClick={hideMarksheets} className='top-4 right-4 text-3xl absolute'>X</div>
                    <div>Marksheets</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-I</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-II</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-III</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-IV</div>
                    {/* <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl'>Semester-V</div> */}
                </div>
            </div>
            <div className='rounded-3xl text-white w-1/5 bg-[#0d0e23]  flex-col p-4 pr-0 hidden md:flex'>

                <div className='flex flex-row items-center cursor-pointer' onClick={toprofile}>
                    <img src={profilepic} className='h-10 w-10 mr-4' alt="" />
                    <div className='flex flex-col items-start w-[70%]'>
                        <div className='text-xl font-medium text-start md:text-base'>{currentUser.currentUser.displayName}</div>
                        <div className='text-slate-300 md:text-sm text-start w-full' style={{ "overflowWrap": "anywhere" }}>{currentUser.currentUser.email}</div>
                        <div className='text-slate-300 md:text-sm text-start w-full cursor-pointer' onClick={Logout}>Logout</div>
                    </div>
                </div>
                {/* <div>
                    main meno
                

                </div> */}
                <div className='flex flex-col items-start mt-8'>
                    <div>Marksheets</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-I</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-II</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-III</div>
                    <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl mb-3 flex items-center justify-center text-xl font-semibold' onClick={openmarksheet}>Semester-IV</div>
                    {/* <div className='w-[90%] bg-[#24243c] h-12 hover:bg-[#5842d3] rounded-xl'>Semester-V</div> */}
                </div>
            </div>
            <div className='sm:w-3/5 w-[100vw]'>
                <Timetable />
            </div>
            <div className='bg-[#0d0e23] rounded-3xl mt-8 sm:mt-0 m-2 sm:m-0 text-white sm:w-1/5 p-4  md:block sm:overflow-y-scroll ' >
                <div className='text-xl font-bold text-start mb-4'>Attendence</div>
                <div className=' flex flex-col items-start hover:bg-[#5842d3] p-2 rounded-md'>
                    <div className='text-[#e08cd6] text-xs font-medium'>till {formattedDate}</div>
                    <div className='text-lg font-semibold'>Power Electronics</div>
                    <div>
                        <label htmlFor="days">Enter attended days</label>
                        <input name='days' id='S1' type="number" className='w-12 outline-none bg-[#2c2c4e] h-6 ml-2 rounded-md' onChange={findPercent} />
                    </div>
                    <div className='text-blue-200 text-sm font-medium'>{S1p}{S1p != 0 ? "%" : ""}</div>
                    <div className='text-sm font-medium text-blue-300 '>{(S1 * 0.75 - S1p*S1/100).toFixed(2)} attend  more classes</div>
                </div>
                <div className=' flex flex-col items-start hover:bg-[#5842d3] p-2 rounded-md'>
                    <div className='text-[#e08cd6] text-xs font-medium'>till {formattedDate}</div>
                    <div className='text-lg font-semibold'>AI</div>
                    <div>
                        <label htmlFor="days">Enter attended days</label>
                        <input name='days' id='S2' type="number" className='w-12 outline-none bg-[#2c2c4e] h-6 ml-2 rounded-md' onChange={findPercent} />
                    </div>
                    <div className='text-blue-200 text-sm font-medium'>{S2p}{S2p != 0 ? "%" : ""}</div>
                    <div className='text-sm font-medium text-blue-300 '>{(S2 * 0.75 - S2p * S2 / 100).toFixed(2)} attend  more classes</div>
                </div>
                <div className=' flex flex-col items-start hover:bg-[#5842d3] p-2 rounded-md'>
                    <div className='text-[#e08cd6] text-xs font-medium'>till {formattedDate}</div>
                    <div className='text-lg font-semibold'>Control System</div>
                    <div>
                        <label htmlFor="days">Enter attended days</label>
                        <input name='days' id='S3' type="number" className='w-12 outline-none bg-[#2c2c4e] h-6 ml-2 rounded-md' onChange={findPercent} />
                    </div>
                    <div className='text-blue-200 text-sm font-medium'>{S3p}{S3p != 0 ? "%" : ""}</div>
                    <div className='text-sm font-medium text-blue-300 '> {(S3 * 0.75 - S3p * S3 / 100).toFixed(2)} attend  more classes</div>
                </div>
                <div className=' flex flex-col items-start hover:bg-[#5842d3] p-2 rounded-md'>
                    <div className='text-[#e08cd6] text-xs font-medium'>till {formattedDate}</div>
                    <div className='text-lg font-semibold'>Machine Design</div>
                    <div>
                        <label htmlFor="days">Enter attended days</label>
                        <input name='days' id='S4' type="number" className='w-12 outline-none bg-[#2c2c4e] h-6 ml-2 rounded-md' onChange={findPercent} />
                    </div>
                    <div className='text-blue-200 text-sm font-medium'>{S4p}{S4p != 0 ? "%" : ""}</div>
                    <div className='text-sm font-medium text-blue-300 '>{(S4 * 0.75 - S4p * S4 / 100).toFixed(2)} attend  more classes</div>
                </div>
                <div className=' flex flex-col items-start hover:bg-[#5842d3] p-2 rounded-md'>
                    <div className='text-[#e08cd6] text-xs font-medium'>till {formattedDate}</div>
                    <div className='text-lg font-semibold'>DSA</div>
                    <div>
                        <label htmlFor="days">Enter attended days</label>
                        <input name='days' id='S5' type="number" className='w-12 outline-none bg-[#2c2c4e] h-6 ml-2 rounded-md' onChange={findPercent} />
                    </div>
                    <div className='text-blue-200 text-sm font-medium'>{S5p}{S5p != 0 ? "%" : ""}</div>
                    <div className='text-sm font-medium text-blue-300 '>{(S5 * 0.75 - S5p * S5 / 100).toFixed(2)} attend  more classes</div>
                </div>
                
            </div>
        </div>
    )
}
