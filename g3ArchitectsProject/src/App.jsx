import { useState } from 'react'

import './App.css'
import Navbar from './navBar/Navbar'
import Banner from './banner/banner'
import QuickList from './quickList/QuickList'

function App() {

  return (
    <>
    <Navbar/>
    <main className='font-workSans'>
      <Banner/>
      <QuickList/>
    </main>

    </>
  )
}

export default App
