import React from 'react'
import './Intro.css'
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className='Hello'>Hello</span>
        <span className="introTxt">I'm <span className='introName'>Satyam</span> <br /> Web-Developer.</span>
        <p className="introPara">I am a skilled web-developer with experience in creating responsive dynamic web pages.</p>
        <Link><button className="btn">Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro