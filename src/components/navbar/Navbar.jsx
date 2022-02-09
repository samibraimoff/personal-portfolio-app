import React from 'react';
import { SiEagle } from 'react-icons/si';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='navLeft'>
        <div className='logoContainer'>
          <SiEagle className='logoIcon' />
          <h3>Sam Ibraim</h3>
        </div>
      </div>

      <div className='navRight'>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='assets/SANDIBEK_IBRAIMOV.pdf' download className='navBtn'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
