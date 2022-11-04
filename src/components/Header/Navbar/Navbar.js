import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='navbar'>
            <nav>
                <Link to="/home" className='active'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;