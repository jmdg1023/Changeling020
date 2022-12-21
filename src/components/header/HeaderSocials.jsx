import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

// SOCIAL ICONS AND LINKS

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/janine-michelle-de-guzman-policarpio-871883124/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/jmdg1023" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    
    </div>
  )
}

export default HeaderSocials