import React from 'react';
import './SingleItem.css';
import Grid from '@mui/material/Grid';

const SingleItem = (props) => {

    const item = props.item;

    return (
        <>
            <Grid xs={12} md={6} lg={3} className='portfolio-item'>
                <div className='image'>
                    <img src={item.image} alt="" />
                </div>
                <div className='overly'>
                    <h4>Preview</h4>
                </div>
            </Grid>
        </>
    );
};

export default SingleItem;