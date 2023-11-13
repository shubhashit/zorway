import React from 'react'

export default function Timetable() {
    return (
        <div className=' text-white h-full flex flex-col items-center justify-center sm:overflow-hidden overflow-scroll'>
            <div className='text-2xl font-bold text-blue-200'>TIME TABLE</div>
            <div className='flex flex-row sm:overflow-hidden overflow-scroll items-start sm:translate-x-0 translate-x-8'>
                <div className=''>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex  items-center justify-center m-1 mb-2  roud'></div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 '>Mon</div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 '>Tue</div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 '>Wed</div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 '>Thu</div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 '>Fri</div>
                </div>
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>9:00 - 10:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Minor Sub</div>
                        <div className='sm:text-sm text-xs text-slate-300'></div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Minor Sub</div>
                        <div className='sm:text-sm text-xs text-slate-300'></div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Minor Sub</div>
                        <div className='sm:text-sm text-xs text-slate-300'></div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-312</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SS</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-314</div>
                        <div className='sm:text-sm text-xs text-slate-300'>GB</div>
                    </div>
                </div>
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>9:00 - 11:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-313</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SGH</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-314</div>
                        <div className='sm:text-sm text-xs text-slate-300'>GB</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>Control</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-354</div>
                        <div className='sm:text-sm text-xs text-slate-300'>YK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-312</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SS</div>
                    </div>
                </div>
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>11:00 - 12:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-312</div>
                        <div className='sm:text-sm text-xs text-slate-300'>PK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-313</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SGH</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>Control</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'></div>
                        <div className='sm:text-sm text-xs text-slate-300'></div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-311</div>
                        <div className='sm:text-sm text-xs text-slate-300'>PS</div>
                    </div>
                </div> 
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>1:00 - 2:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-354</div>
                        <div className='sm:text-sm text-xs text-slate-300'>YK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-354</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SB</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-311</div>
                        <div className='sm:text-sm text-xs text-slate-300'>PS</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>P.E.</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>D.S.L.</div>
                    </div>
                </div>
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>2:00 - 3:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>CS-352</div>
                        <div className='sm:text-sm text-xs text-slate-300'>Cse Dept.</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>CS-352</div>
                        <div className='sm:text-sm text-xs text-slate-300'>Cse Dept.</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>CS-352</div>
                        <div className='sm:text-sm text-xs text-slate-300'>Cse Dept.</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>P.E.</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>Lab</div>
                        <div className='sm:text-sm text-xs text-slate-300'>D.S.L.</div>
                    </div>
                </div>
                <div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex items-center justify-center m-1 mb-2 text-sm sm:text-lg '>
                        <div>3:00 - 4:00</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-314</div>
                        <div className='sm:text-sm text-xs text-slate-300'>RK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-313</div>
                        <div className='sm:text-sm text-xs text-slate-300'>SGH</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-313(T)</div>
                        <div className='sm:text-sm text-xs text-slate-300'>RK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'>EE-313</div>
                        <div className='sm:text-sm text-xs text-slate-300'>RK</div>
                    </div>
                    <div className='sm:h-[4.5rem] sm:w-[4.5rem] h-12 w-12 hover:bg-[#5842d3] rounded-lg bg-[#2c2c4e] flex flex-col items-center justify-center m-1 mb-2 '>
                        <div className='sm:text-lg sm:font-medium text-sm font-normal'></div>
                        <div className='sm:text-sm text-xs text-slate-300'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
