import React from 'react'
import './Intro.css'
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll'
import { introPara } from '../../utils/contents'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Intro = () => {

  const[proffesions] = useTypewriter({
    words: ['Web-Developer', 'App Developer', 'Full Stack Developer', 'Freelancer', 'Data-Scientist'],
    loop: { infinity: true },
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  })

  return (
    <section id='intro'>
      <div className="introContent">
        <span className='Hello'>Hello</span>
        <span className="introTxt">I'm <span className='introName'>Satyam</span> <br />
          
          {proffesions}
          <Cursor />
         </span>
        <p className="introPara">I am a skilled <span style={{color:'#fba021'}}>web-developer</span> with experience in creating responsive dynamic web pages.</p>
        <Link to='#'><button className="btn">Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro