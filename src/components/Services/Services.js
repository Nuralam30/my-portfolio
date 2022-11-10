import React from 'react';
import './Services.css';
import Header from '../Header/Header';
import { AllServices } from './allServices';
import Service from './Service/Service';

const Services = () => {

    console.log(AllServices)

    return (
        <div>
            <Header></Header>
            <div className="services">
                <p className="service-text">Works as a Freelancer on Fiverr, Upwork, Linkedin & other marketplaces based on Bangladesh. Highly experienced in Frontend Website Design & Fixing any CSS & JS issues.</p>
                <div className="service">
                    {
                        AllServices.map( ser => <Service card={ser}></Service>)
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Services;