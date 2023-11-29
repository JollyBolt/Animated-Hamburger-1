import React, { useState } from 'react'

const Hamburger = () => {
    const [open,setOpen] = useState(false)
  return (
    <div
     onClick={()=>setOpen(!open)}
     className='w-[100px] h-[100px] bg-black rounded-md relative cursor-pointer shadow-md shadow-white'>
        <div className={`w-[100px] h-[100px] bg-white rounded-md border-2 border-black  absolute -top-1 -left-1 active:top-0 active:left-0  p-4 ${open?'flex flex-col justify-center':'flex flex-col justify-between'}  py-6`}>
            <div className={`bg-black h-2 rounded-2xl transition-all ease-in-out ${open? '   absolute':''}`}></div>
            <div className={`bg-black h-2 rounded-2xl transition-all ease-in-out  ${open? 'rotate-45 translate-y-[50%] top-[50%]':''} `}></div>
            <div className={`bg-black h-2 rounded-2xl transition-all ease-in-out  ${open? ' rotate-[135deg] -translate-y-[50%]':''} `}></div>

        </div>
        Hamburger
    </div>
  )
}

export default Hamburger