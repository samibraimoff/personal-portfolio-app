import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='wrapper'>
        <h1>
          A <strong>frontend engineer</strong> passionate about creating
          interactive websites and user friendly application experience
        </h1>
        <h3>
          Frontend engineer at{' '}
          <a href='https://www.mersys.io/' target='_blank' rel='noreferrer'>
            {' '}
            Mersys.io
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Intro;
