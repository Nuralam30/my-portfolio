import React from 'react';
import './Portfolio.css';
import Header from '../Header/Header';
import { PortfolioItems } from './PortfolioItems';
import SingleItem from './SingleItem/SingleItem';
import { Grid } from '@mui/material';
import { useState } from 'react';

const Portfolio = () => {

    const [ items, setItems ] = useState([]);
    const [ filterItems, setFilterItems ] = useState(false);

    const handleFilter = (category) =>{
        const categoryItems = PortfolioItems.filter(pi => pi.category === category);
        setItems(categoryItems);
        setFilterItems(true);
    }


    return (
        <div>
            <Header></Header>
            <div className="portfolio">
                <p className="my-text">Working as a Frontend developer with HTML5, CSS3, BOOTSTARP, JQUERY, REACT JS, ANGULAR JS, MATERIAL UI etc. Providing my freelance services on various market places. </p>

                <ul className="filter-btns">
                    <li className='active' onClick={() =>setItems(PortfolioItems)}>
                        <div className='filter-animation'></div>
                        <button className='filter-btn'> ALL </button>
                    </li>

                    <li onClick={() =>handleFilter('html')}>
                        <div className='filter-animation'></div>
                        <button className='filter-btn'> HTML </button>
                    </li>

                    <li onClick={() =>handleFilter('wordpress')}>
                        <div className='filter-animation'></div>
                        <button className='filter-btn'> WORDPRESS </button>
                    </li>

                    <li onClick={() =>handleFilter('react')}>
                        <div className='filter-animation'></div>
                        <button className='filter-btn'> REACT JS </button>
                    </li>

                    <li onClick={() =>handleFilter('css3')}>
                        <div className='filter-animation'></div>
                        <button className='filter-btn'> CSS3 </button>
                    </li>
                </ul>

                    <div className="filter-portfolio">    
                        <Grid container spacing={2}>
                            {
                                filterItems ? items.map(pf => <SingleItem key={pf.id} item={pf}></SingleItem>) :
                                PortfolioItems.map(pf => <SingleItem key={pf.id} item={pf}></SingleItem>)
                            }
                        </Grid>
                    </div>
            </div>
        </div>
    );
};

export default Portfolio;