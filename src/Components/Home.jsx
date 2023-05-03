import React from 'react'
import hero from './Assets/orph.jpg'
import Menu from './Menu'

function Home() {
  return (
    <div className='w-full h-screen bg-fixed bg-no-repeat bg-cover' style={{backgroundImage: `url(${hero})`}}>
        <Menu/>
        <div className='ml-10 mt-20'>
            <h1 className='text-4xl text-yellow-400 font-bold font-serif mb-5'>Hephzibah Orphanage</h1>
            <h4 className='text-4xl text-yellow-400'>Our Mission</h4>
            <p className='text-xl text-white mt-1'>Bringing everyone together, making one big family</p>
            <button className='mt-10 px-5 py-3 bg-white text-2xl text-violet-700'>Donate</button>
        </div>   
    </div>
  )
}

export default Home
