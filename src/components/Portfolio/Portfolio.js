import React from 'react';
import './Portfolio.css';
import Header from '../Header/Header';
import { PortfolioItems } from './PortfolioItems';
import SingleItem from './SingleItem/SingleItem';
import { Grid } from '@mui/material';

const Portfolio = () => {
    return (
        <div>
            <Header></Header>
            <div className="portfolio">
                <p className="my-text">Working as a Frontend developer with HTML5, CSS3, BOOTSTARP, JQUERY, REACT JS, ANGULAR JS, MATERIAL UI etc. Providing my freelance services on various market places. </p>

                <ul className="filter-btns">
                    <li className='active'><div className='filter-animation'></div><button className='filter-btn'> ALL </button></li>
                    <li><div className='filter-animation'></div><button className='filter-btn'> HTML </button></li>
                    <li><div className='filter-animation'></div><button className='filter-btn'> WORDPRESS </button></li>
                    <li><div className='filter-animation'></div><button className='filter-btn'> REACT JS </button></li>
                    <li><div className='filter-animation'></div><button className='filter-btn'> CSS3 </button></li>
                </ul>

                    <div className="filter-portfolio">    
                        <Grid container spacing={2}>
                            {
                                PortfolioItems.map(pf => <SingleItem key={pf.name} item={pf}></SingleItem>)
                            }
                        </Grid>
                    </div>
            </div>
        </div>
    );
};

export default Portfolio;