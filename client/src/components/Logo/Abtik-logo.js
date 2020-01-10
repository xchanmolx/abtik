import React from 'react';

import classes from './css-logo.module.css';
import abtikLogo from '../../assets/images/abtik-logo.png';

const Abtik = (props) => {
    return (
        <div className={classes.LogoAbtik} style={{height: props.height}}>
        <img src={abtikLogo} alt="abtik" />
        </div>
    );    
};

export default Abtik;