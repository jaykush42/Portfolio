import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {TbBrandWhatsapp} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g68zg94', 'template_j9ye026', form.current, 'Rbdluro-zA9T85AQ9')
    
    e.target.reset();
  };

  return (
 <section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact_container">
    <div className="contact_options">
      <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
       <h4>Email</h4>
       <h5>jaykush9161@gmail.com</h5>
       <a href="mailto:jaykush9161@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
      </article>

      <article className='contact_option'>
        <BsLinkedin className='contact_option-icon'/>
       <h4>LinkedIn</h4>
       <h5>Jay Kushwaha</h5>
       <a href="https://www.linkedin.com/in/jayprakashkushwaha/" target='_blank' rel="noreferrer">Send a message</a>
      </article>

      <article className='contact_option'>
        <TbBrandWhatsapp className='contact_option-icon'/>
       <h4>Whatsapp</h4>
       <h5>9369287775</h5>
       <a href="https://api.whatsapp.com//send?phone+919369287775" target='_blank' rel="noreferrer">Send a message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
  </section>
  )
}

export default Contact