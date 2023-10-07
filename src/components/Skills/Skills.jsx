import React from 'react';
import './Skills.css'

const Skills = () => {

  const skills = [
    {
      'img': '#',
      'title': 'Web Development',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
      'alt': 'Web Development'
    },
    {
      'img': '#',
      'title': 'Frontend Development',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
      'alt': 'Frontend Development'
    },
    {
      'img': '#',
      'title': 'Backend Development',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
      'alt': 'Backend Development'
    },
    {
      'img': '#',
      'title': 'Data Scientist',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
      'alt': 'Data Scientist'
    }
  ]

  const skillBars = skills.map(skill =>{
    return (
      <div className="skillBar">
          <img src={skill.img} className='skillImg' alt={skill.alt} />
          <div className="skillTxt">
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        </div>
    )
  })

  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skilldescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum nostrum rem, eligendi magnam eveniet tenetur impedit error? Exercitationem quisquam porro atque repellendus voluptatem, cumque vitae, qui sed est voluptates illum totam debitis quasi, accusamus a non voluptate repudiandae cupiditate perferendis ea voluptatibus itaque. Dignissimos.
      </span>
      <div className="skillBars">
        {skillBars}
      </div>
    </section>
  )
}

export default Skills