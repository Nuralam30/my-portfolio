import React from 'react';
import './Services.css';
import Header from '../Header/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AllServices } from './allServices';

const Services = () => {

    console.log(AllServices)

    return (
        <div>
            <Header></Header>
            <div className="services">
                <p className="service-text">Works as a Freelancer on Fiverr, Upwork, Linkedin & other marketplaces based on Bangladesh. Highly experienced in Frontend Website Design & Fixing any CSS & JS issues.</p>
                <div className="service">
                    {
                        AllServices.map( ser =>
                            <Card sx={{ maxWidth: 345 }} className='service-card'>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={ser.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {ser.heading}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        )
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Services;