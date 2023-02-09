import React from 'react';
import './Portfolio.css';
import Header from '../Header/Header';
import { PortfolioItems } from './PortfolioItems';
import SingleItem from './SingleItem/SingleItem';
import { Grid } from '@mui/material';
import { useState } from 'react';
import Footer from '../Footer/Footer';

const Portfolio = () => {

    const [ items, setItems ] = useState([]);
    const [ filterItems, setFilterItems ] = useState(false);
    const [ isActive, setIsActive ] = useState();

    const categories = [...new Set(PortfolioItems.map(item => item.category))]

    const handleFilter = (e) =>{
        const newItems = PortfolioItems.filter(item => item.category === e.currentTarget.textContent || item.subcategory === e.currentTarget.textContent);
        setItems(newItems);
        setFilterItems(true);
        setIsActive(e.currentTarget.textContent)
    }

    const showAll = () =>{
        setItems(PortfolioItems);
        setIsActive();
    }


    return (
        <div>
            <Header></Header>
            <div className="portfolio">
                <p className="my-text" data-aos="zoom-in">Working as a Frontend developer with HTML5, CSS3, BOOTSTARP, JQUERY, REACT JS, ANGULAR JS, MATERIAL UI etc. Providing my freelance services on various market places. </p>

                <ul className="filter-btns" data-aos="fade-right">
                    <li className={isActive ? '' : 'active'} onClick={showAll}>All</li>
                    {
                        categories.map(ca => <li className={isActive === ca ? 'active' : ''} onClick={handleFilter}>{ca}</li>)
                    }
                </ul>

                    <div className="filter-portfolio" data-aos="fade-left">    
                        <Grid container spacing={2}>
                            {
                                filterItems ? items.map(pf => <SingleItem key={pf.id} item={pf}></SingleItem>) :
                                PortfolioItems.map(pf => <SingleItem key={pf.id} item={pf}></SingleItem>)
                            }
                        </Grid>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;