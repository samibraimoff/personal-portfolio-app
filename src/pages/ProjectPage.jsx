import React from 'react';
import Footer from '../components/footer/Footer';
import MenuButtons from '../components/menu/MenuButtons';
import Projects from '../components/projects/Projects';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import './projectsPage.css';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <div className='projectsPage'>
      <div className='projectBtnContainer'>
        <Link to='/'>
          <HiArrowNarrowLeft className='projectIcon' />
          <span>Back</span>
        </Link>
      </div>
      <Projects />
      <Footer />
      <MenuButtons />
    </div>
  );
};

export default ProjectPage;
