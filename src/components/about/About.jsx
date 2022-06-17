import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Month Bootcamp</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Mini Project</h5>
                <small>Job Page and Talent Page</small>
              </article>
            </div>
            <p>
            Computer Science graduate and fast learning. Skilled in Microsoft Office, postgresSQL, NodeJs, ReactJs, Html, Css, JavaScript. Have an interest in Information Technology. I am open to learning new things have a good personality.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        
      </div>
    </section>
  )
}

export default About