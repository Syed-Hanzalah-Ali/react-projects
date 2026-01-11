import React, { useState } from 'react'
import Btn from './components/btn';
function App() {

  const [color,setColor]=useState("olive");
  return (
    <div className='w-full h-screen'
    style={{background:color}}>
      
      <div className='fixed px-3 py-2 flex flexwrap justify-center bottom-12 inset-x-0'>
        <div className='bg-white flex flexwrap justify-center gap-3 shadow-lg rounded-xl px-3 py-2'>

          <button onClick={()=>setColor("Red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Red"}}
        >Red</button>
        <button onClick={()=>setColor("Green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Green"}}
        >Green</button>
        <button onClick={()=>setColor("Purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Purple"}}
        >Purple</button>
        <button onClick={()=>setColor("Blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Blue"}}
        >Blue</button>
        <button onClick={()=>setColor("Yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Yellow"}}
        >Yellow</button>
        
        </div>
      </div>

    </div>
  )
}

export default App