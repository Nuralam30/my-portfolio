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
                        <Grid item xs={8} md={8}>
                            <Box
                                sx={{
                                    width: 350,
                                    maxWidth: '100%',
                                }}
                            >
                            <FormGroup>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Your name</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" />
                                </FormControl>
                                <FormControl>
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

                    <Grid item xs={4} md={4}> 
                        <div className="social-icons">
                            <a href="#facebook"><FacebookIcon sx={{fontSize: '25px'}}></FacebookIcon></a>
                            <a href="#linkedin"><LinkedInIcon sx={{fontSize: '25px'}}></LinkedInIcon></a>
                            <a href="#twitter"><TwitterIcon sx={{fontSize: '25px'}}></TwitterIcon></a>
                            <a href="#github"><GitHubIcon sx={{fontSize: '25px'}}></GitHubIcon></a>
                        </div> 
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Contact;