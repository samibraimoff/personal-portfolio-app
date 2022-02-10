import React from 'react';
import './projects.css';
import { projectsData } from '../../projectData';
import Project from './project/Project';

const Projects = () => {
  return (
    <div className='projects'>
      <h2>projects</h2>
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
