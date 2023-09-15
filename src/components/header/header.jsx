import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header_container">
      <h2>Hello I'm</h2>
      <h1>Jay Kushwaha</h1>
      <h5 className='text-light'>Web Developer & Coder</h5>
      <CTA />

      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header