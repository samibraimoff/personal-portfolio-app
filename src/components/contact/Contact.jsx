import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Index = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wr7hay7',
        'template_2pl0nvp',
        formRef.current,
        'user_NVNDcKOfCvceV0dHTOL6y'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact' id='contact'>
      <div className='wrapper'>
        <div className='contactContainer'>
          <div className='contactRight'>
            <h1>Want to get in touch?</h1>
          </div>

          <div className='contactLeft'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                <h3>Name</h3>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Enter your name'
                />
              </label>
              <label>
                <h3>Email</h3>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Enter your email'
                />
              </label>
              <label>
                <h3>Subject</h3>
                <input
                  type='text'
                  name='user_subject'
                  placeholder='Enter your subject'
                />
              </label>
              <label>
                <h3>Message</h3>
                <textarea
                  rows='10'
                  name='user_message'
                  placeholder='Enter your message'
                />
              </label>
              <input type='submit' value='Send' className='contactBtn' />
              {sent && <h4>Thank you for your message!</h4>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
