import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    
  return (
    <>
    <div>followers: {data.following}</div>
    <img src={data.avatar_url} alt="" width={300}/>
    </>
  )
}

export default Github

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Syed-Hanzalah-Ali');
  return response.json();
}