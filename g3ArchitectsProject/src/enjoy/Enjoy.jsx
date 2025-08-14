import React from 'react'
import Container from '../Layout/container/Container'
import Title from '../Layout/title/Title'
import Info from '../Layout/info/info'

import enjoyPhoto from '../assets/enjoyPhoto.png'

function Enjoy() {
  return (
    <section className='mt-[130px]'>
        <Container>
            <div className='flex justify-between items-center'>
              {/* enjoy text */}
           <div>
            <Title className="leading-12 border-l-4  border-[#FF900E] ">
                <h3 className='pl-5'>
                    Features you will love & enjoy
                </h3>
            </Title>
            <Info className="mt-6 mb-[10px]">
                <p className='w-[586px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
            </Info>
          
            <div className='space-y-5'>
            <div className='p-6 w-[586px] rounded-lg shadow'>
            <h6 className='font-semibold text-xl text-primary'>Dexktop & Mobile Version</h6>
            <Info className='mt-[10px]'> 
                <p className='w-[514px]'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
            </Info>
            </div>
            <div className='p-6 w-[586px] rounded-lg shadow'>
                <h6 className='font-semibold text-xl text-primary'>Drag & Drop Builder</h6>
                <Info className='mt-[10px]'> 
                   <p className='w-[514px]'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </Info>
            </div>

            <div className='p-6 w-[586px] rounded-lg shadow'>
                <h6 className='font-semibold text-xl text-primary'>Awesome Modern Design</h6>
                <Info className='mt-[10px]'> 
                   <p className='w-[514px]'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </Info>
            </div>

            <div className='p-6 w-[586px] rounded-lg shadow'>
                <h6 className='font-semibold text-xl text-primary'>Super Easy to Edit</h6>
                <Info className='mt-[10px]'> 
                   <p className='w-[514px]'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </Info>
            </div>
            </div>

           </div>
           {/* enjoy photo */}
          <figure className='relative'>
            <img src={enjoyPhoto} alt="enjoyPhoto" />
            <div className='w-[342px] bg-[#FF900E] p-11 rounded-lg absolute -bottom-[77px] -left-[92px]'>
                <p className='font-bold text-[65px] leading-[50px] text-center text-[#ffff]'>10+Year <span className='font-medium text-[25px] leading-[0px]'>Experience</span></p>
            </div>
          </figure>
            </div>
        </Container>
    </section>
  )
}

export default Enjoy