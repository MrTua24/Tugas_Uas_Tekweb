import React from 'react'

const Hero = () => {
  return (
    <div className='text-[#4f9649]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#5DB996] font-bold p-2'>Healty Food</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Makanan Sehat</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Makanan sehat dan jasmani untuk semua orang</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-[#009990]'>Makanan Sehat membuat semua orang sehat secara jasmani</p>
        </div>
    </div>
  )
}

export default Hero
