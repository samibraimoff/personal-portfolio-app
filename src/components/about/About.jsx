import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='wrapper'>
        <div className='aboutTop'>
          <div className='aboutTopLeft'>
            <img src='assets/intro.jpg' alt='' />
          </div>
          <div className='aboutTopRight'>
            <h2>Hi there!</h2>
            <h3>
              I am Sam. I’ve always been excited and interested about
              electronics and how things work and that is how I explored my
              passion for computers. Learn more about my journey below.
            </h3>
          </div>
        </div>

        <div className='aboutBottom'>
          <div className='aboutBottomLeft'>
            <h2>About me</h2>
            <div className='aboutme'>
              <h3>
                My parents bought me my first personal computer when I was 12
                years old. And I loved it. I remember disassembling it into
                parts to see how they are connected. This experience brought me
                to seek IT career.
              </h3>
              <br />
              <h3>
                I am a software engineer with{' '}
                <strong>frontend development</strong> experience and bachelor's
                degree in computer systems and networks. I have 10+ years of
                engineering, information technology and sales experience which
                gives me a solid background in software development.
              </h3>
              <br />
              <h3>
                I love building{' '}
                <strong>web applications with user-friendly interfaces</strong>.
              </h3>
            </div>
          </div>
          <div className='aboutBottomRight'>
            <h2>Skills</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>React Hooks</li>
              <li>React router</li>
              <li>Postman</li>
              <li>Git</li>
              <li>jira</li>
              <li>Rest api</li>
              <li>axios</li>
              <li>npm</li>
              <li>Express.js</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
