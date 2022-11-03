import React from 'react';
import './Banner.css';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="social-links">
                <a href="#facebook"><FacebookIcon className='icon-link fb' sx={{ fontSize: 45 }} /></a>
                <a href="#github"><GitHubIcon className='icon-link github' sx={{ fontSize: 45 }} /></a>
                <a href="#linkedin"><LinkedInIcon className='icon-link linkedin' sx={{ fontSize: 45 }} /></a>
                <a href="#twitter"><TwitterIcon className='icon-link twitter' sx={{ fontSize: 45 }} /></a>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <h3>Hello</h3>
                </Grid>
                <Grid item xs={4}>
                    <h3>This is banner</h3>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;