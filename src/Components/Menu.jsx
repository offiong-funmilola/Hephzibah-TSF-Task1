import React from 'react'

function Menu() {
  return (
    <nav className='w-full h-20 px-10 flex items-center justify-between'>
        <div className='w-10 h-8 rounded text-purple-700 bg-white text-xl text-center italic'>HO</div>
        <ul className='flex'>
            <li className='text-lg text-white px-3 hover:text-orange-600'>Home</li>
            <li className='text-lg text-white px-3 hover:text-orange-600'>About Us</li>
            <li className='text-lg text-white px-3 hover:text-orange-600'>Donate</li>
            <li className='text-lg text-white px-3 hover:text-orange-600'>Patner</li>
            <li className='text-lg text-white px-3 hover:text-orange-600'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Menu