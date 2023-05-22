import React from 'react'
import Profile from '../images/image-profile-desktop.webp';
import Rings from '../images/pattern-rings.svg';
import Circle from '../images/pattern-circle.svg';

export default function Hero() {
  return (
    <div className='hero'>
        <img src={Rings} alt='rings' className='rings'/>
        <img src={Circle} alt='circle' className='circles'/>
        <div className='hero-container'>
            <div className='intro'>
                <h1>Nice to meet you! I'm <span>Marcio Lopes</span>.</h1>
                <p>I'm a front-end developer who has a passion for building things and designing. 
                    My goal in life is to design & build the best UI/UX & provide users the best 
                    experience.
                </p>
                <a href='#'>Contact me</a>
            </div>
            <img src={Profile} alt='profile'/>
        </div>
    </div>
  )
}
