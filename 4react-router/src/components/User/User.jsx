import React from 'react'
import { useParams } from 'react-router-dom'  // use to get data in URL
function User() {
    const {username}=useParams()   // destructuring
  return (
    <>
    <div className='flex justify-center w-full'>

        <div className='bg-gray-600 text-white text-center w-96'>User: {username}</div>
    </div>
    </>
  )
}

export default User