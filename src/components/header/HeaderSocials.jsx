import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jayprakashkushwaha/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://auth.geeksforgeeks.org/user/jaykush9161" target='_blank' rel="noreferrer" ><SiGeeksforgeeks /></a>
        <a href="https://leetcode.com/jaykush/" target='_blank' rel="noreferrer" ><SiLeetcode /></a>
        <a href="https://github.com/jaykush42" target='_blank' rel="noreferrer" ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials