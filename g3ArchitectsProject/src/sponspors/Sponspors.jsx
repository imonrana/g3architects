import React from 'react'
import Container from '../Layout/container/Container'

import sponsporLogoOne from '../assets/sponsorLogoOne.png'
import sponsporLogoTwo from '../assets/sponsorLogoTwo.png'
import sponsporLogoThree from '../assets/sponsorLogoThree.png'
import sponsporLogoFour from '../assets/sponsorLogoFour.png'
import sponsporLogoFive from '../assets/sponsorLogoFive.png'

const Sponspors = () => {
  return (
    <section className='mb-[130px]'>
        <Container>
            {/* title */}
            <div className='text-center'>
                <h5 className='font-bold text-[45px] text-primary'>
                    Our Sponspors
                </h5>
                <p className='mt-6 mb-[50px] font-normal text-base text-secondary leading-[26px] w-[542px] mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
            {/* logo items */}
            <div className='flex justify-between'>
                <img src={sponsporLogoOne} alt="sponsporLogoOne" />
                <img src={sponsporLogoTwo} alt="sponsporLogoTwo" />
                <img src={sponsporLogoThree} alt="sponsporLogoThree" />
                <img src={sponsporLogoFour} alt="sponsporLogoFour" />
                <img src={sponsporLogoFive} alt="sponsporLogoFive" />
            </div>
        </Container>
    </section>
  )
}

export default Sponspors