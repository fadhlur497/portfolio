import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desaign</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>With a design system in place, we will design your product quickly and efficiently. If you don't have the design system, we can help you establish it so you could scale to multiple platforms maintaining brand consistency and keeping costs down. We also provide.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>I open static website services such as portfolio website and profile information website</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services