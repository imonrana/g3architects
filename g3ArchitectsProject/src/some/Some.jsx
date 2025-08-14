import React from 'react'
import Container from '../Layout/container/Container'
import Title from '../Layout/title/Title'

import cardIconOne from '../assets/someCardIconOne.png'
import cardIconTwo from '../assets/someCardIconTwo.png'
import cardIconThree from '../assets/someCardIconThree.png'
import cardIconFour from '../assets/someCardIconFour.png'

const Some = () => {
  return (
   <section className='mt-[130px] mb-[180px]'>
    <Container>
     <div>
        {/* info text */}
        <div className='w-[542px]'>
            <h3 className='font-bold text-[45px] text-primary'>
                Some Facts
            </h3>
            <p className='font-normal text-base text-secondary'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
        {/* some card */}

        <div className='mt-[100px] flex justify-around'>
            {/* card one */}
            <div className='font-semibold text-center w-[241px] border-2 border-[#FF900E] rounded-lg pt-[46px] px-[36px] pb-[60px]'>
                <img src={cardIconOne} alt="cardIconOne" className='mx-auto'/>
                <p className=' text-[45px] text-[#424242]'>54</p>
                <p className='text-base text-secondary'>Awards Winnings</p>
            </div>
            {/* card two */}
            <div className='font-semibold text-center w-[241px] border-2 border-[#FF900E] rounded-lg pt-[46px] px-[36px] pb-[60px]'>
                <img src={cardIconTwo} alt="cardIconTwo" className='mx-auto'/>
                <p className=' text-[45px] text-[#424242]'>1458</p>
                <p className='text-base text-secondary'>FF900E</p>
            </div>
            {/* card three */}
            <div className='font-semibold text-center w-[241px] border-2 border-[#FF900E] rounded-lg pt-[46px] px-[36px] pb-[60px]'>
                <img src={cardIconThree} alt="cardIconThree" className='mx-auto'/>
                <p className=' text-[45px] text-[#424242]'>590</p>
                <p className='text-base text-secondary'>Clients Worked</p>
            </div>
            {/* card four */}
            <div className='font-semibold text-center w-[241px] border-2 border-[#FF900E] rounded-lg pt-[46px] px-[36px] pb-[60px]'>
                <img src={cardIconFour} alt="cardIconFour" className='mx-auto'/>
                <p className=' text-[45px] text-[#424242]'>22578</p>
                <p className='text-base text-secondary'>Email Send</p>
            </div>

        </div>
     </div>
        
    </Container>
   </section>
  )
}

export default Some