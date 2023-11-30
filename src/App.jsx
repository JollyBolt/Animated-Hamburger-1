import { useState } from 'react'

import './App.css'
import Hamburger from './components/Hamburger'

function App() {
  
  return (
    <>
      <div className='bg-slate-300 w-[100vw] h-[calc(100dvh-4rem)] flex justify-center items-center'>
        <Hamburger/>
      </div>
      <div className='h-[4rem] bg-slate-300'>
        <div className='w-[95%] mx-auto border-t-2 border-t-black flex justify-center text-center px-4'> 
        <p className='text-xl lg:mt-3'>View the source code on <a href='https://github.com/JollyBolt/Animated-Hamburger-1' className='underline font-bold'>Github</a> and star the repository. </p>
        </div>
      </div>
    </>
  )
}

export default App
