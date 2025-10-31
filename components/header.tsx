import React from 'react'
// import logo from '@components/assets/logo.png'
import Image from 'next/image'

function header() {
  return (
    <div className='flex flex-row justify-start border-b-1 border-gray-300 py-2 px-2'>
        <Image src="/images/logo.jpg" alt='logo' width={50} height={50} className='grayscale mx-10' />
    </div>
  )
}

export default header
