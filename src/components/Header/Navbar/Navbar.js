import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { ToggleContext } from '../../../App';

const Navbar = () => {

    const [isNav, setIsNav] = useContext(ToggleContext);
    console.log(isNav)

    return (
        <div className={ isNav ? 'navbar toggle-active' : 'navbar'}>
            <nav>
                <Link to="/home" className='nav-link active'>Home</Link>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/services" className='nav-link'>Services</Link>
                <Link to="/portfolio" className='nav-link'>Portfolio</Link>
                <Link to="/contact" className='nav-link'>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;