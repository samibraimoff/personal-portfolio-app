import React from 'react';
import './footer.css';
import { SiEagle } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='footerTop'>
          <div className='footerLogoContainer'>
            <SiEagle className='footerLogoIcon' />
            <p>Sam Ibraim</p>
          </div>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sandiibraim/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </div>
        <div className='footerBottom'>
          <p>Copyright © 2022 Sam Ibraim. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
