import React from 'react'
import Container from '../Layout/container/Container'

import banner from'../assets/banner.png'
import Info from '../Layout/info/info'
import Button from '../Layout/button/Button'
const Banner = () => {
  return (
    <section aria-label='hero banner' className='bg-[rgba(255,143,14,0.1)] pt-52 pb-11 '>
        <Container>
        <div>
            {/* banner info */}
            <div className= ' text-center mx-auto w-[868px] h-[calc(100vh-205px)]'>
                <h1 className='font-bold text-[64px]'>
                    <span className='block'>Brand New</span> Group of Architects 
                </h1>
               <Info className='mt-[25px] mb-[32px]'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
               </Info>
               <Button>Explore More</Button>
            </div>
            {/* banner img */}

            <figure>
                <img className=' h-[700px]' src={banner} alt="banner img" />
            </figure>
            
        </div>
        </Container>
    </section>
  )
}

export default Banner