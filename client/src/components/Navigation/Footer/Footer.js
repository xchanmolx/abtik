import React from 'react';

import classes from './Footer.module.css';
import FooterItems from '../Footer/FooterItems/FooterItems';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.DesktopOnly}>
            <FooterItems />
        </div>
    </div>
);

export default footer;