import React from 'react'
import Profile from '../images/image-profile-desktop.webp';
import Rings from '../images/pattern-rings.svg';
import Circle from '../images/pattern-circle.svg';

export default function Hero() {
  return (
    <>
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

    {/* Home Section*/}

    <div className='about'>
        <div className='about-container'>
            <h1>About me</h1>
        <p> My interest began when i was in my 2nd year of university. I was deeply demotivated with 
            the course i was doing (Accounting and Finance) and it was a point in life where i didn't 
            know what i wanted to do in the future. I found out about Python and decided to self teach 
            myself but it didn't go as far as i expected. then i bumped into The Learning People who gave 
            me a online course on being a front-end Developer and now here I am today!
            here are some of the skills I've learned since i started the course :
        </p>
        <ul className='lang-list'>
            <li>
                <h2>HTML</h2>
                <p>2 Years Experience</p>
            </li>
            <li>
                <h2>CSS</h2>
                <p>2 Years Experience</p>
            </li>
            <li>
                <h2>Javascript</h2>
                <p>2 Years Experience</p>
            </li>
            <li>
                <h2>React/Redux</h2>
                <p>2 Years Experience</p>
            </li>
        </ul>
        </div>
    </div>
    </>
  )
}
