import React from 'react'
import hero from './Assets/orph.jpg'
import Form from './Form';
import Menu from './Menu';

function Home({state, setState}) {
  return (
    <div className='w-full h-screen bg-fixed bg-no-repeat bg-cover' style={{backgroundImage: `url(${hero})`}}>
        <Menu/>
        <div className='w-full mt-4 md:mt-0 h-4/5 md:px-10 flex flex-col gap-y-6 md:flex-row md:justify-between'>
          <div className='w-full h-1/2 md:w-1/2 md:h-full bg-transparent flex flex-col justify-center'>
            <h1 className='text-5xl text-yellow-400 font-bold font-serif mb-5 text-center md:text-4xl md:text-start'>Hephzibah Orphanage</h1>
            <h4 className='text-4xl text-yellow-400 font-sans font-semibold text-center md:text-start'>Our Mission</h4>
            <p className='text-2xl text-white mt-1 font-sans font-bold text-center px-10 md:px-0 md:text-start md:text-xl'>Helping the needy, making one big family</p>
          </div> 
          <div className='w-full md:w-1/2 h-full flex items-center justify-center md:justify-end'>
            <Form state={state} setState={setState}/>  
          </div>
        </div>
    </div>
  )
}

export default Home
