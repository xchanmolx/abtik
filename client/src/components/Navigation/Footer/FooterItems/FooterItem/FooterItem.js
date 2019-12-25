import React from 'react';

import classes from './FooterItem.module.css';

const footerItem = (props) => (
    <li className={classes.FooterItem}>
        <div>{props.children}</div>
    </li>
);

export default footerItem;