import React from 'react';

import classes from './FooterItems.module.css';
import FooterItem from './FooterItem/FooterItem';

import { Icon } from 'antd';

const footerItems = (props) => {

    const year = new Date().getFullYear();

    return (
    <ul className={classes.FooterItems}>
        <FooterItem><a href="https://www.facebook.com/AloguinsanDisasterRiskReductionandMagementOffice/" target="_blank" rel="noopener noreferrer"><Icon type="facebook" /></a></FooterItem>
        <FooterItem>&copy; {year} ABTIK Rescue.</FooterItem>
        <FooterItem><a href="https://chantin-4218a.web.app" target="_blank" rel="noopener noreferrer"><Icon type="meh" /></a></FooterItem>
    </ul>
    );    
};

export default footerItems;