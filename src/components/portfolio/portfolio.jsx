import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/news.png'
import IMG3 from '../../assets/todo.png'
import IMG4 from '../../assets/drowsiness.png'
import IMG5 from '../../assets/digitalclock.png'
import IMG6 from '../../assets/progress.png'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://link.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Daily News Website</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com/jaykush42/News-App" className='btn' target='_blank'>Github</a>
          <a href="https://jaykush42.github.io/News-App/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>To Do List</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com/jaykush42/To-Do-List" className='btn' target='_blank'>Github</a>
          <a href="https://jaykush42.github.io/To-Do-List/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Real Time Driver Drowsiness Detection System</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com/jaykush42/Real-Time-Driver-Drowsiness-Detection-System" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/jaykush42/Real-Time-Driver-Drowsiness-Detection-System" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Digital Clock</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com/jaykush42/Digital-Clock" className='btn' target='_blank'>Github</a>
          <a href="https://jaykush42.github.io/Digital-Clock/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Progress Circular Bar</h3>
         <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://link.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
      </section>

  )
}

export default portfolio