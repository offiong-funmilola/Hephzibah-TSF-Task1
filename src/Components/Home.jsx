import React from 'react'
import hero from './Assets/orph.jpg'
import Menu from './Menu'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='relative w-full h-screen bg-fixed bg-no-repeat bg-cover' style={{backgroundImage: `url(${hero})`}}>
        <Menu/>
        <div className='w-full px-10 mt-24 bg-transparent flex flex-col items-center md:items-start'>
            <h1 className='text-5xl text-yellow-400 font-bold font-serif mb-5 text-center md:text-4xl md:text-start'>Hephzibah Orphanage</h1>
            <h4 className='text-4xl text-yellow-400 font-sans font-semibold'>Our Mission</h4>
            <p className='text-2xl text-white mt-1 font-sans font-bold text-center md:text-start md:text-xl'>Bringing everyone together, making one big family</p>
            <Link to='/form'>
                <button className='mt-10 px-5 py-3 bg-white text-2xl text-violet-700'>Donate</button>
            </Link>
        </div>   
    </div>
  )
}

export default Home
