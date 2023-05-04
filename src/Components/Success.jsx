import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Success() {
    const navigate = useNavigate()
    useEffect(()=> {
        setTimeout(()=> {navigate('/')}, 2000)
    },[navigate])
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center'>
      <div className='w-1/2 h-1/2 bg-yellow-400 flex items-center justify-center'>
        <h3 className='text-white font-sans font-bold text-3xl'>Thank you for the Donation</h3>
      </div>
    </div>
  )
}

export default Success
