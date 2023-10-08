import React from 'react'
import { contactDescription } from '../../utils/contents'
import './Contact.css'
import github from '../../assets/socials/github.png'
import linkedin from '../../assets/socials/linkedin.png'
import twitter from '../../assets/socials/twitter.png'
import instagram from '../../assets/socials/instagram.webp'

const Contact = () => {

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
      'link': 'https://www.linkedin.com/',
      'img':linkedin
    },
    {
      'id': 3,
      'name': 'twitter',
      'link': 'https://www.twitter.com/',
      'img':twitter
    },
    {
      'id': 4,
      'name': 'instagram',
      'link': 'https://www.instagram.com/',
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
        <form action="" className='contactForm'>
          <input type="text" className='name' placeholder='Your name' />
          <input type="email" className="email" placeholder='someone@example.com'/>
          <textarea name="message" rows="5" className='msg' placeholder='Your message.'></textarea>
          <button className="submitBtn" type='submit' value="send">Submit</button>

          <div className="links">
            {socialLinks}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact