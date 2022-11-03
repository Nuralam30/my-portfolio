import React from 'react';
import './Home.css';
import Header from './../Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;