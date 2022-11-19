import React from 'react';
import './Education.css';

const Education = (props) => {

    const { degree, year, description } = props.education;
    
    return (
        <div className="education">
            <h3 className='edu-heading'>{degree}</h3>
            <h5 className="edu-institute highlight">{year}</h5>
            <p className="edu-description">{description}</p>
        </div>
    );
};

export default Education;