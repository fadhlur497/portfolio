import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Create a Simple Search Job Component in React</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fadhlur497/miniprojectbacth17_reactjs/tree/main/src/views/hiring" className='btn' target='_blank'>GitHub</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Create Job for Hiring Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fadhlur497/miniprojectbacth17_reactjs/tree/main/src/views/app/job" className='btn' target='_blank'>GitHub</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Create a Simple Search Component And Delete Job</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fadhlur497/miniprojectbacth17_reactjs/tree/main/src/views/app/job" className='btn' target='_blank'>GitHub</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Display Training Participant Data In Talent Page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fadhlur497/miniprojectbacth17_reactjs/tree/main/src/views/app/talent" className='btn' target='_blank'>GitHub</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio