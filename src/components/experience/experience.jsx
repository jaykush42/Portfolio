import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fronted">
          <h3>Fronted Development</h3>

          <div className="experience_content">

          <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>React</h4>
             <small className='text-light'>Intermediate</small>
            
            </div>
            </article>
            
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
             <dir>
              <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </dir>
            </article>

            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Intermediate</small>
             </div>
             </article>

            <article className='experience_details'>
             <BsFillPatchCheckFill  className='experience_details-icon' />
             <div>
             <h4>JavaScript</h4>
             <small className='text-light'>Intermediate</small>
            
             </div>
             </article>


          </div>
        </div>

        <div className="experience_fronted">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
             <dir>
              <h4>NodeJs, Express</h4>
             <small className='text-light'>Experienced</small>
             </dir>
            </article>

            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>MongoDB, SQL</h4>
             <small className='text-light'>Intermediate</small>
             </div>
             </article>

            <article className='experience_details'>
             <BsFillPatchCheckFill  className='experience_details-icon' />
             <div>
             <h4>C++, C & Java</h4>
             <small className='text-light'>Intermediate</small>
            
             </div>
             </article>

            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Python</h4>
             <small className='text-light'>Intermediate</small>
            
            </div>
            </article>

          </div>
        </div>
        
      </div>
      </section>
    )
}

export default experience