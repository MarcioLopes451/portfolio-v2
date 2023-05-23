import React from 'react';
import Github from '../images/icon-github.svg';
import Linkedin from '../images/icon-linkedin.svg';
import Twitter from '../images/icon-twitter.svg';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contacting'>
            <h1>Contact</h1>
            <p>I would love to hear about your project and how I could help. 
            Please fill in the form, and I'll get back to you as soon as possible.
            </p>
            </div>
            <div className='form-section'>
                <form>
                    <label for='name'></label>
                   <br />
                   <input 
                   type='text'
                   id='name'
                   value='name'
                   name='name' />
                   <br />
                   <label for='name'></label>
                   <br />
                   <input 
                   type='text'
                   id='email'
                   value='email'
                   name='email' />
                </form>
                <button>Send Message</button>
            </div>
        </div>
        <div className='footer-container'>
        <p>Marcio Lopes</p>
            <div className='social-media'>
                <img src={Github} alt='github' />
                <img src={Linkedin} alt='linkedin' />
                <img src={Twitter} alt='twitter' />
            </div>
        </div>
    </div>
   
  )
}
