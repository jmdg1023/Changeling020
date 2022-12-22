import React from 'react'
import './about.css'
import ME from '../../assets/mimi.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Technical Experience</h5>
              <small>Six years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Industries</h5>
              <small>Insurance, NBN, MSP and Govenment</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>See my works in the Projects Section</small>
            </article>
          </div>
          <p>
          A graduate of BS in Information Technology in Philippines. Currently a Senior Support Analyst aspiring to unlock knowledge and opportunities to further my career in IT. 
          </p>
          <p>Web Development and Programming has always piqued my interest.  I have this thirst for knowledge in IT that make me quite curious and keen in learning. Some of my strengths are my acquisitiveness and curiousity. I tend to want to learn everything I don't know about. I am very curious and quite the resourceful gal when motivated. </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About