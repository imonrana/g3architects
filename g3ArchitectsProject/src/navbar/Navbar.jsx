import React from 'react'
import Container from '../Layout/container/Container'

import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className=' absolute top-0 left-0 w-full '>
    <Container>
        <div className='flex justify-between items-center mt-[50px]'>
            {/* logo */}
            <div>
                <img className='w-80' src={logo} alt="logo" />
            </div>
            {/* menu */}
            <div>
                <ul className='flex gap-x-[90px] font-workSans font-medium text-lg text-[#424242] leading-6'>
                    <li className='hover:font-bold cursor-pointer transition-all duration-300'>
                        <a href="#">Home</a>
                    </li>
                    <li className='hover:font-bold cursor-pointer transition-all duration-300'>
                        <a href="#">About</a>
                    </li>
                    <li className='hover:font-bold cursor-pointer transition-all duration-300'>
                        <a href="#">Contact Us </a>
                    </li>
                    <li className='hover:font-bold cursor-pointer transition-all duration-300'>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </Container>
    </nav>
  )
}

export default Navbar