import React from 'react';
import './About.css';
import Header from '../Header/Header';
import { Grid } from '@mui/material';
import { Skills } from './Qualifiatios';
import Skill from './Skill/Skill';

const About = () => {

    return (
        <div className='about'>
            <Header></Header>
            <div className="intro">
                <p className="intro-text">Hello, My name is Nura Alam and I am a junior Frontend Developer working on various frontend design for 3-4 years. I have already completed my frontend designing of various websites. I also provide my services on wordpress customizaton and bug fixing in (html,css and js)  </p>
            </div>
            <div className="skills-educations">
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <div className="skills">
                            <h3 className='section-title'>Skills</h3>
                            {
                                Skills.map(sk => <Skill key={sk.id} skill={sk}></Skill>)
                            }
                        </div>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <div className="educations">
                            <h2>Hello</h2>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default About;