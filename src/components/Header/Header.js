import React, { useContext, useState } from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import logo from '../utilities/images/logo.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ToggleContext } from '../../App';


const Header = () => {

    const [isNavbar, setIsNavbar] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [isNav, setIsNav] = useContext(ToggleContext);
    
    useEffect( () =>{
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
          }

          window.addEventListener('resize', changeWidth)

          return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const toggleNav = () =>{
        setIsNavbar(!isNavbar)
        setIsNav(!isNavbar)
    }
    return (
        <div className='header'>
            <div className="logo"> <Link to="/"><img src={logo} alt="Logo" /></Link></div>

            {(isNavbar || screenWidth > 800) && <Navbar className="nav-animate"></Navbar>}

            <div className="toggle-btn" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Header;