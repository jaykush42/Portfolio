import React from "react";
import "./about.css";
import ME from "../../assets/me-about23.png";
import { FaAward } from "react-icons/fa";
import { RiFolderChartFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
         {/* eslint-disable-next-line */}
          <img src={ME} alt="About Image" className="about_me-image" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Web Developer</h5>
              <small>1+ Years Experience</small>
            </article>

            <article className="about_card">
              <FaCode className="about_icon" />
              <h5>Coding & DSA</h5>
              <small>500+ Questions</small>
            </article>

            <article className="about_card">
              <RiFolderChartFill className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am Jay Prakash Kushwaha, an undergraduate in Computer Science from
            IIIT Bhopal. As a Web Developer and Competitive Coder, I have
            tackled over 500 questions on platforms like GeeksForGeeks and
            Leetcode, solidifying my expertise in Data Structures and
            Algorithms. 
            <br></br>
            My portfolio includes a variety of web projects such as
            CarRentalApp, Notes Maker, a personal Portfolio, a News website
            using React, URL Bookmarker, and more. I am passionate about making
            the web more beautiful and user-friendly through creative design. I
            am always excited to take on new challenges and projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
