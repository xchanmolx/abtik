import React from 'react';

import {
    Jumbotron
} from 'reactstrap';

import classes from './Contact.module.css';
import Footer from '../Navigation/Footer/Footer';

const contact = () => (
    <div className={classes.Contact}>
        <Jumbotron>
            <h1>CONTACT</h1>
        </Jumbotron>
        <h6>Mobile Phone</h6>
        <p>0926 530 7338 - TM</p>
        <p>0922 238 8140 - SUN</p>
        <hr />
        <h6>Telephone</h6>
        <p>469 9041</p>
        <hr />
        <h6>Email Address</h6>
        <p>aloguinsandrrmo@gmail.com</p>
        <Footer />
    </div>
);

export default contact;