import React from 'react';
import Header from './../Header/Header';
import Banner from './Banner/Banner';
import './Home.css';
import { AllServices } from '../Services/allServices';
import Service from '../Services/Service/Service';
import Footer from '../Footer/Footer';

const Home = () => {

    const services3 = AllServices.slice(0, 3);
    
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <div className="service-home">
            {
                services3.map( ser => <Service card={ser}></Service>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;