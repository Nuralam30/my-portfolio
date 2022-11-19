import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer' data-aos="flip-up">
            <div className="lets-talk">
                <p className='talk-text'>Let's Talk</p>
                <p className="talk-media">Email: nuralam.hstu.930@gmail.com</p>
                <p className="talk-media"><WhatsAppIcon className='whatsapp'></WhatsAppIcon> +8801854-405107</p>
            </div>

            <div className="contact-social">
                <a href="https://www.facebook.com/nuralom.bhuiyain.1" rel='noreferrer' target='_blank'><FacebookIcon sx={{fontSize: '2.4rem'}} className='icon fb'></FacebookIcon></a>

                <a href="https://www.linkedin.com/in/nur-alam-5a10541b3/" rel='noreferrer' target='_blank'><LinkedInIcon sx={{fontSize: '2.4rem'}} className='icon linkedin'></LinkedInIcon></a>

                <a href="https://twitter.com/NuraAla23500955" rel='noreferrer' target='_blank'><TwitterIcon sx={{fontSize: '2.4rem'}} className='icon twitter'></TwitterIcon></a>

                <a href="https://github.com/Nuralam30" rel='noreferrer' target='_blank'><GitHubIcon sx={{fontSize: '2.4rem'}} className='icon github'></GitHubIcon></a>
            </div>

            <div className="quick-links">
                <p className='talk-text'>Quick Links</p>
                <nav>
                    <NavLink to="/" id='nav-link'> -- Home</NavLink>

                    <NavLink to="/about" id='nav-link'> -- About</NavLink>

                    <NavLink to="/services" id='nav-link'> -- Services</NavLink>

                    <NavLink to="/portfolio" id='nav-link'> -- Portfolio </NavLink>

                    <NavLink to="/contact" id='nav-link'> -- Contact </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Footer;