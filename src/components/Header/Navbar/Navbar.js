import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/" id='nav-link' className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }>Home
                </NavLink>

                <NavLink to="/about" id='nav-link' className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }>About
                </NavLink>

                <NavLink to="/services" id='nav-link' className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }>Services
                </NavLink>

                <NavLink to="/portfolio" id='nav-link' className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }>Portfolio
                </NavLink>

                <NavLink to="/contact" id='nav-link' className={({ isActive }) =>
                    isActive ? 'active' : ''
                    }>Contact
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;