import React from 'react'
import './header.css'
import CTA from './CTA'
import Fad2 from '../../assets/fad2.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Heloo I'm</h5>
        <h1>Fadhlur Rahman</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/> 
        <div className='fad2'>
          <img src={Fad2} alt='fad2'/>
          </div>

          <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>

  )
}

export default Header