import React from 'react';

import classes from './css-logo.module.css';
import alogLogo from '../../assets/images/alog-logo.png';

const Alog = (props) => {
    return (
        <div className={classes.LogoAlog} style={{height: props.height}}>
        <img src={alogLogo} alt="aloguinsan" />
        </div>
    );    
};

export default Alog;