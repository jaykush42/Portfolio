import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'


const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Jay Kushwaha</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://linkedin.com"><ImLinkedin /></a>
      <a href="https://twitter.com"><RiTwitterXFill /></a>
      <a href="https://instagram.com"><AiFillInstagram /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Jay Kushwaha. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default footer