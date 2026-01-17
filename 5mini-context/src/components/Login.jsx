import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useState } from 'react';

function Login() {
    const {setUser}=useContext(UserContext);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" value={username} placeholder='username'/>
        <input onChange={(e)=>setPassword(e.target.value)} type="text" value={password} placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login