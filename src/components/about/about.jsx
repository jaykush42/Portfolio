import React from 'react'
import "./about.css"
import ME from '../../assets/me-about2.png'
import {FaAward} from 'react-icons/fa'
import {RiFolderChartFill} from 'react-icons/ri'
import {FaCode} from 'react-icons/fa6'


const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About me</h2>

    <div className="container about_container">
      <div className="about_me">
      <img src={ME} alt="About Image" className='about_me-image' />
      </div>
       
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon' />
             <h5>Web Developer</h5>
             <small>1+ Years Experience</small>
          </article>

          <article className='about_card'>
            <FaCode className='about_icon' />
             <h5>Coding & DSA</h5>
             <small>500+ Questions</small>
          </article>

          <article className='about_card'>
            <RiFolderChartFill className='about_icon' />
             <h5>Projects</h5>
             <small>5+ Completed</small>
          </article>
        </div>
        <p>
        I am Jay Prakash Kushwaha, final year Computer Science student of IIIT Bhopal. I am Web Developer and Competitive Coder. I have done 500+ questions on different coding platforms like GeeksForGeeks and Leetcode. I have good knowledge of Data Structures and Algorithms.
        <br></br> I have made fronted web projects like Portfolio and News website using React and To do Lis using HTML, CSS and JavaScript. 
        My goal is to make the web more beautiful and user-friendly through creative web design. I'm excited to take on new works.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about