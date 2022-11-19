import React from 'react';
import './Skill.css';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Skill = (props) => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));


    const { name, percent } = props.skill;


    return (
        <div className="skill">
            <h4>{name}</h4>
            <span className='percent-value'>{percent}% </span>
            <BorderLinearProgress variant="determinate" value={percent} className='skill-bar' />
        </div>
    );
};

export default Skill;