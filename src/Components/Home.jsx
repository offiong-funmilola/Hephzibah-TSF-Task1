import React from 'react'
import hero from './Assets/orph.jpg'
import Menu from './Menu';
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='w-full h-screen bg-fixed bg-no-repeat bg-cover' style={{backgroundImage: `url(${hero})`}}>
      <Menu/>
      <div className='w-full h-60 bg-transparent mt-28 flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-yellow-400 font-bold font-serif mb-5 text-center md:text-4xl md:text-start'>Hephzibah Orphanage</h1>
        <h4 className='text-4xl text-yellow-400 font-sans font-semibold text-center md:text-start'>Our Mission</h4>
        <p className='text-2xl text-white mt-1 font-sans font-bold text-center px-10 md:px-0 md:text-start md:text-xl'>Helping the needy, making one big family</p>
        <Link to='/form'>
          <button type='button' className='w-32 text-xl font-sans font-semibold px-3 py-2 bg-white text-purple-800 hover:text-yellow-400 mt-5 hover:bg-white'>Donate</button>
        </Link>
      </div> 
          
    </div>
  )
}

export default Home
