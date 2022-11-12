import React from 'react';
import './SingleItem.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const SingleItem = (props) => {

    const item = props.item;

    return (
        <>
            <Grid xs={12} md={6} lg={3} className='portfolio-item'>
                <div className='image'>
                    <img src={item.image} alt="" />
                </div>
                <div className='overly'>
                    <Link to='/portfolio-item'></Link>
                </div>
            </Grid>
        </>
    );
};

export default SingleItem;