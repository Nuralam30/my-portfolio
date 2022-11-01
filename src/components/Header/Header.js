import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo"> <a href="#home">Home</a></div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;