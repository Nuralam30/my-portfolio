import React from 'react';
import './Service.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {

    const { image, heading } = props.card;
    return (
        <>
            <Card sx={{ maxWidth: 345 }} className='service-card' data-aos="flip-right">
                <div className="service-img">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={image}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {heading}
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
        </>
    );
};

export default Service;