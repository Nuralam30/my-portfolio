import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemPreview.css';
import { PortfolioItems } from './../PortfolioItems';
import { Grid } from '@mui/material';

const ItmePreview = () => {
    const { name } = useParams();
    const item = PortfolioItems.find(pt => pt.name === name);
    console.log(item)


    return (
        <div className='item-preview'>
            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    <div className="item-img">
                        <img src={item.image} alt="" />
                    </div>
                </Grid>
                <Grid xs={12} md={4}>
                    <h1>{item.name}</h1>
                    <h3>Category : {item.category}</h3>
                    <h4>Live : <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></h4>
                    <div className='details'>
                        <h2>Project Description</h2>
                        <p>{item.description}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ItmePreview;