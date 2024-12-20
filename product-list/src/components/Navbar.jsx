import React from 'react';


export const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#5DB996]'>
      <h1 className='w-full text-3xl font-bold text-[#009990]'>Product Food</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>PRODUCT</li>
        <li className='p-4'>KONTAK</li>
      </ul>
    </div>
  )
}

export default Navbar;