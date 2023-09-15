import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jay-kushwaha-2a4431201/" target='_blank'><BsLinkedin /></a>
        <a href="https://auth.geeksforgeeks.org/user/jaykush9161" target='_blank'><SiGeeksforgeeks /></a>
        <a href="https://leetcode.com/jaykush9161/" target='_blank'><SiLeetcode /></a>
        <a href="https://github.com/jaykush42" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials