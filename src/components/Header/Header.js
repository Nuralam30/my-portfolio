import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import logo from '../utilities/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo"> <Link to="/"><img src={logo} alt="Logo" /></Link></div>

            <Navbar></Navbar>

            <div className="toggle-btn">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Header;