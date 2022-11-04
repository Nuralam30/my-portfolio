import React from 'react';
import TypedJs from "react-typed";

const textLines = [
    `Web Desiner`,
    ` Web Developer`,
    `Graphic Designer`,
    `Food Blogger`
  ];

const Typed = () => {
    return ( 
        <span className='highlight'>
            <TypedJs strings={textLines} typeSpeed={60} backSpeed={50} endDelay={100} loop={true} />
        </span>
    );
};

export default Typed;