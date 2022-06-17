import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thank you for visiting my website</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/fadhlur.rahman.188/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/fadhlurrahman497/?hl=id"><FiInstagram/></a>
        <a href="https://twitter.com/Fadhlur497"><GrTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer