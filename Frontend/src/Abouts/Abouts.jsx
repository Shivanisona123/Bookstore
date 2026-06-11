import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

const Abouts = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex'>
        <About />
      </div>
      <Footer />
    </>
  )
}

export default Abouts