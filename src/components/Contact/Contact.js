import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import { FormGroup, FormControl, InputLabel, Input, Grid, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="contact"> 
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}  data-aos="zoom-in">
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                            >
                            <FormGroup>
                                <FormControl className='form-control'>
                                    <InputLabel htmlFor="my-input">Your name</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                </FormControl>
                                <FormControl className='form-control'>
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                </FormControl>
                                <FormControl className='form-control'>
                                    <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                </FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Enter your message"
                                    multiline
                                    rows={3}
                                />
                                <Box
                                    sx={{
                                        width: 150,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <Button variant="contained" size="small"> Send </Button>
                                </Box>
                                
                            </FormGroup>
                        </Box> 
                    </Grid>

                    <Grid item xs={12} md={4} data-aos="fade-left"> 
                        <div className="contact-links">
                            <h2>Connnect me on</h2>
                            <a href="https://www.facebook.com/nuralom.bhuiyain.1" rel='noreferrer' target='_blank'><FacebookIcon sx={{fontSize: '1.8rem'}} className='fb'></FacebookIcon> Facebook</a>

                            <a href="https://www.linkedin.com/in/nur-alam-5a10541b3/" rel='noreferrer' target='_blank'><LinkedInIcon sx={{fontSize: '1.8rem'}} className='linkedin'></LinkedInIcon> Linkedin</a>

                            <a href="https://twitter.com/NuraAla23500955" rel='noreferrer' target='_blank'><TwitterIcon sx={{fontSize: '1.8rem'}} className='twitter'></TwitterIcon> Twitter</a>

                            <a href="https://github.com/Nuralam30" rel='noreferrer' target='_blank'><GitHubIcon sx={{fontSize: '1.8rem'}} className='github'></GitHubIcon> Github</a>
                        </div> 
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Contact;