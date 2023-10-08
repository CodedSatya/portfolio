import React from 'react';
import './Works.css';
import { workData } from '../../utils/workdata'; 

const Works = () => {


  const projects = workData.map(project =>{
    return(
      <div className="workcard">
          <a href={project.link} target='_blank' rel='noopener'>
            <img className='workImg' src={project.img} alt={project.alt} />
            <div className="workDetails">
              <h3 className="workTitle">{project.title}</h3>
              <p className="workDescription">{project.description}</p>
            </div>
          </a>
        </div>
    )
  });

  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className="worksDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed fugit minima nesciunt aspernatur deserunt obcaecati similique itaque amet iure, rem est. Consectetur quasi veritatis non odit incidunt quas fugiat libero obcaecati porro nam.
      </span>

      <div className="workContainer">
        {projects}
      </div>
    </section>
  )
}

export default Works