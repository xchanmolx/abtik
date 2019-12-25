import React from 'react';

import classes from './Logo.module.css';
import abtikLogo from '../../assets/images/abtik-logo.png';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
        <img src={abtikLogo} alt="abtik" />
        </div>
    );    
};

export default logo;