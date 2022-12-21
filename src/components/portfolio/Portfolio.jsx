import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'

// SIX OF MY PROJECTS.....

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'Changeling005 - Work Day Scheduler ',
    desc: 'A simple calendar application that allows a user to save events for each hour of the day.  Technologies: HTML and CSS powered by jQuery',
    github: ' https://github.com/jmdg1023/Changeling005',
    demo: ' https://jmdg1023.github.io/Changeling005/'
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'Group Project 1 - Project-Crescendo',
    desc: 'Crescendo is a video service where users can watch uploaded videos from content creators that can be shared via tinyUrlthat shortens web service, which provides short aliases for redirection of long URLs. Technologies: HTML, CSS, TinyUrl API, Tailwind and Flowbite',
    github: 'https://github.com/jmdg1023/Project-Crescendo',
    demo: 'https://jmdg1023.github.io/Project-Crescendo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Group Project 2 - Bookings at Bootcamp Bar',
    desc: 'A booking system that can be accessed 24/7. Allowing potential customers to self-book through our website, securely store customers data and keep your business running long after you have gone home for the day. Technologies: HTML, CSS, Handlebars, Eslint, Bcrypt, SQL2 and Moment.js ',
    github: 'https://chardige.github.io/Travel-planner/',
    demo: 'https://bootcamp-bar.herokuapp.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Changeling013 - Object-Relational Mapping (ORM) Challenge: E-commerce Back End',
    desc: 'A back end for my e-commerce website that uses the latest technologies that can compete with other e-commerce companies.   Technologies: Inquirer, Sequelize, Node.js and SQL',
    github: 'https://github.com/jmdg1023/Changeling013',
    demo: 'https://drive.google.com/file/d/1IH92GChwb06MclalcPyifnKLOMdAt57A/view/'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Changeling011 - Express.js Challenge: Note Taker',
    desc: 'A Note Taker that can be used to write and save notes.  Technologies: HTML, CSS Bootstrap, jQuery, Node.js',
    github: 'https://github.com/jmdg1023/Changeling011',
    demo: 'https://obscure-sea-70597.herokuapp.com//'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Changeling019 - Text Editor',
    desc: 'Notes or code snippets with or without an internet connection that can reliably retrieve them for later use. Technologies - Heroku, Express, Babel and IDB',
    github: 'https://github.com/jmdg1023/Changeling019',
    demo: 'https://salty-dusk-22856.herokuapp.com/'
  },


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio