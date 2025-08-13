import React from 'react'
import Container from '../Layout/container/Container'

import quickList1 from '../assets/QucikList1.png'
import quickList2 from '../assets/QucikList2.png'
import quickList3 from '../assets/QucikList3.png'
import quickList4 from '../assets/QucikList4.png'
import Title from '../Layout/title/Title'
import Info from '../Layout/info/info'
import Button from '../Layout/button/Button'

const QuickList = () => {
  return (
    <section className='mt-[85px]'>
        <Container>
            <div className='flex justify-around  items-center'>
                <div className='space-y-6'>
                <figure className='flex flex-wrap gap-x-6 '>
                    <img className='w-[342px] h-[320px]' src={quickList1} alt="quickList1" />
                    <img className='w-[342px] h-[320px]' src={quickList2} alt="quickList2" />
                </figure>
                 <figure className='flex flex-wrap gap-x-6 '>
                    <img  className='w-[342px] h-[320px]'src={quickList3} alt="quickList3" />
                    <img className='w-[342px] h-[320px]' src={quickList4} alt="quickList4" />
                </figure>
                </div>

                <div >
                    <Title>
                        <h3><span className='text-secondary font-medium'>Quick list</span> of Our <span className='text-[#FF900E]'> Features</span></h3>
                    </Title>
                    <Info className='w-[537px] mt-6 mb-8'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                    </Info>
                    <Button>Explore More</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default QuickList