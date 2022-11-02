import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <a href="#header" className='active'>Home</a>
                <a href="#about">About</a>
                <a href="#about">Services</a>
                <a href="#about">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;