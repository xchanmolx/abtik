import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import { Icon } from 'antd';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><Icon type="home" /> Home</NavigationItem>
        <NavigationItem link="/weather"><Icon type="environment" /> Weather</NavigationItem>
        <NavigationItem link="/preparedness"><Icon type="cloud" /> Preparedness</NavigationItem>
        <NavigationItem link="/hazard"><Icon type="heat-map" /> Hazard Map</NavigationItem>
        <NavigationItem link="/activity"><Icon type="picture" /> Activities</NavigationItem>
        <NavigationItem link="/about"><Icon type="idcard" /> About</NavigationItem>
        <NavigationItem link="/contact"><Icon type="phone" /> Contact</NavigationItem>
        </ul>       
    );    
};

export default NavigationItems;