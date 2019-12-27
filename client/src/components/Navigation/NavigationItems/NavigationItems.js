import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import { Icon } from 'antd';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><Icon type="home" /> Home</NavigationItem>
        <NavigationItem link="/weather"><Icon type="environment" /> Weather</NavigationItem>
        <NavigationItem link="/responder"><Icon type="team" /> Responder</NavigationItem>
        <NavigationItem link="/about"><Icon type="idcard" /> About</NavigationItem>
        <NavigationItem link="/contact"><Icon type="phone" /> Contact</NavigationItem>        
        <NavigationItem link="/authenticate"><Icon type="lock" /> Authenticate</NavigationItem>        
    </ul>
);

export default navigationItems;