import React from 'react';
import './About.css';
import Header from '../Header/Header';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const About = () => {


    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));


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
                            <BorderLinearProgress variant="determinate" value={50} />
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