import React from 'react';
import './menu.css';
import { GrLinkedin } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';

const MenuButtons = () => {
  return (
    <div className='menu'>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/sandiibraim/'
            target='_blank'
            rel='noreferrer'
          >
            <GrLinkedin className='menuIcon' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/samibraimoff'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineGithub className='menuIcon' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuButtons;
