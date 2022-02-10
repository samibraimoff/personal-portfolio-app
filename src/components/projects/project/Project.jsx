import React from 'react';
import './project.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGlobe } from 'react-icons/fa';

const Project = ({ project }) => {
  return (
    <div className='project' key={project.id}>
      <div className='projectLeft'>
        <img src={project.img} alt={project.name} />
      </div>
      <div className='projectRight'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          <li>
            <a href={project.github} target='_blank' rel='noreferrer'>
              <GrLinkedin className='projectIcon' />
            </a>
          </li>
          <li>
            <a href={project.link} target='_blank' rel='noreferrer'>
              <FaGlobe className='projectIcon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
