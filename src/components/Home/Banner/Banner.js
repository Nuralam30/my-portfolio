import React from 'react';
import './Banner.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import profileImage from '../../utilities/images/NurImage.png';
import Typed from './Typed';
import Grid from '@mui/material/Grid';


const Banner = () => {
    return (
        <div className='banner'>
            <div className="social-links">
                <a href="#facebook"><FacebookIcon className='icon-link fb' sx={{ fontSize: 45 }} /></a>
                <a href="#github"><GitHubIcon className='icon-link github' sx={{ fontSize: 45 }} /></a>
                <a href="#linkedin"><LinkedInIcon className='icon-link linkedin' sx={{ fontSize: 45 }} /></a>
                <a href="#twitter"><TwitterIcon className='icon-link twitter' sx={{ fontSize: 45 }} /></a>
            </div>


            <Grid container spacing={2} className='banner-text'>
                <Grid item xs={6} md={8}>
                    <p>Hi, My name is <span className='highlight'>Nura Alam</span></p>
                    <p className='typed-text'>I am a <Typed className='highlight'></Typed></p>
                    <div className='get-in-touch'> <div className='btn-hover'> </div><button className='get-in-touch-btn btn-animation'>Get in Touch</button> </div>
                </Grid>

                <Grid item xs={6} md={4}>
                    <div className="profile-image">
                        <img src={profileImage} alt="profile" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;