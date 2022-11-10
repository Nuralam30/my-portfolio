import React from 'react';
import Header from './../Header/Header';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;