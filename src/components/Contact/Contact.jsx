import React, { useRef } from 'react';
import { contactDescription } from '../../utils/contents';
import './Contact.css';
import github from '../../assets/socials/github.png';
import linkedin from '../../assets/socials/linkedin.png';
import twitter from '../../assets/socials/twitter.png';
import instagram from '../../assets/socials/instagram.webp';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pry2hfs', 'template_en0bwzk', form.current, 'e7tUk2dctyDrwr2oD')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };


  const socials = [
    {
      'id': 1,
      'name': 'github',
      'link': 'https://www.github.com/CodedSatya',
      'img':github
    },
    {
      'id': 2,
      'name': 'linkedin',
      'link': 'https://www.linkedin.com/in/satyam-sekhar-barik-b909b7228/',
      'img':linkedin
    },
    {
      'id': 3,
      'name': 'twitter',
      'link': 'https://x.com/SatyamBarik9?t=o7XGZUgOg3CRCWy5IbUqbA&s=09',
      'img':twitter
    },
    {
      'id': 4,
      'name': 'instagram',
      'link': 'https://www.instagram.com/satyam_barik_26/',
      'img':instagram
    }
  ]

  const socialLinks = socials.map(social =>{
    return(
      <a href={social.link} key={social.id} target='_blank' rel='noopener'>
        <img src={social.img} alt={social.name} className='link' />
      </a>
    )
  })

  return (
    <section id="contactPage">
      <div id="clients">

      </div>

      <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDescription">
          {contactDescription}
        </span>
        <form ref={form} className='contactForm' onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your name' name='from_name'/>
          <input type="email" className="email" placeholder='someone@example.com' name='your_email'/>
          <textarea name="message" rows="5" className='msg' placeholder='Your message.' ></textarea>
          <button className="submitBtn" type='submit' value="Send">Submit</button>

          <div className="links">
            {socialLinks}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact