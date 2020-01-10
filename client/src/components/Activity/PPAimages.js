import React from 'react';

import classes from './PPAimages.module.css';
import casesImage from '../../assets/images/cases-2019.jpg';

const PPAimages = (props) => (
    <div className={classes.PPAimages} style={{height: props.height}}>
        <img src={casesImage} alt="abtik 2019 cases" />
    </div>
);

export default PPAimages;