import React from 'react';
import ThumbnailOne from '../images/thumbnail-project-1-large.webp';

export const project = [
    {
        projectName: 'Reddit App',
        lang: 'HTML CSS React',
        image: ThumbnailOne,
        website:'https://marciolopes451.github.io/React-Reddit-App/',
        repo: 'https://github.com/MarcioLopes451/React-Reddit-App',
    },
    {
        projectName: 'Reddit App',
        lang: 'HTML CSS React',
        image: ThumbnailOne,
        website:'https://marciolopes451.github.io/React-Reddit-App/',
        repo: 'https://github.com/MarcioLopes451/React-Reddit-App',
    }
]

export default function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='projects-container'>
        {project.map((item,index) => (
            <div
            key={index}>
                <div className='content'>
                    <div className='project-image'>
                    <img src={item.image}/>
                    <div className='project-links'>
                        <a href={item.website} target="_blank">View Website</a>
                        <a href={item.repo} target="_blank">View Source Code</a>
                    </div>
                    </div>
                    <h2>{item.projectName}</h2>
                    <p>{item.lang}</p>
                    <div className='mobile-tablet-links'>
                        <a href={item.website} target="_blank">View Website</a>
                        <a href={item.repo} target="_blank">View Source Code</a>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
