import { useState } from 'react'

import './App.css'
import Navbar from './navBar/Navbar'
import Banner from './banner/banner'
import QuickList from './quickList/QuickList'
import Enjoy from './enjoy/Enjoy'
import Some from './some/Some'
import Sponspors from './sponspors/Sponspors'
import Footer from './footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <main className='font-workSans'>
      <Banner/>
      <QuickList/>
      <Enjoy/>
      <Some/>
      <Sponspors/>
    </main>
    <Footer/>

    </>
  )
}

export default App
