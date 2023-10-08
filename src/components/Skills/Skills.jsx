import React from 'react';
import './Skills.css'
import { aboutPara, skills } from '../../utils/contents';

const Skills = () => {
  
// Skills show case component =>
  const skillBars = skills.map(skill =>{
    return (
      <a href={skill.link} target='_blank' rel='noopener' key={skill.id} className="skillBar">
        <img src={skill.img} className='skillImg' alt={skill.alt} />
        <div className="skillTxt">
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
      </a>
    )
  })

  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skilldescription">
        {aboutPara}
      </span>
      <div className="skillBars">
        {skillBars}
      </div>
      
    </section>
  )
}

export default Skills