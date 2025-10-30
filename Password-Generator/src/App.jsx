import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength]=useState(8);
  const [numbers,setNumbers]=useState(false);
  const [characters,setCharacters]=useState(false);
  const [password,setPassword]=useState("");

  //useRef hook, it is used to take reference of something
  const passwordReference=useRef(null)

  const passwordGenerator=useCallback(()=>{
    console.log(numbers," ",characters);
    
    let passwd="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers){
      str+="1234567890";
    }
    if(characters){
      str+="!@#$%^&*()_-+={]}[|:':<>?/";
    }

    for(let i=0;i<length;i++){
      passwd+=str[Math.floor(Math.random()*str.length)];
      
    }
    console.log(passwd);
    
    setPassword(passwd);
  },[length,numbers,characters])

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(password);

  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numbers,characters])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-red-600 bg-gray-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordReference}
          />
          <button 
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-purple-700 text-white px-3 py-0.5 shrink-0 hover:bg-purple-500'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={5}
            max={100}
            value={length} 
            className='cursor-pointer accent-purple-700'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numbers}
            id='numberInput'
            className='accent-purple-700'
            onChange={()=>{setNumbers((prev)=>{
              return !prev
            })}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={characters}
            id='characterInput'
            className='accent-purple-700'
            onChange={()=>{setCharacters((prev)=>{
              return !prev
            })}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App