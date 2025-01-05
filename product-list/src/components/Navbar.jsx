import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full flex justify-between items-center h-24 px-4 text-[#0a0c0b] bg-opacity-80 z-10'>
      <h1 className='w-full text-3xl font-bold text-[#170d10]'>Healthy Food</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-serif'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4 font-serif'>
          <Link to='/About'>About</Link>
        </li>
        <li className='p-4 font-serif'>
          <Link to='/Product'>Product</Link>
        </li>
        <li className='p-4 font-serif'>
          <Link to='/kontak'>Kontak</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;