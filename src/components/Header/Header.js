import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import logo from '../utilities/images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo"> <a href="#home"><img src={logo} alt="Logo" /></a></div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;