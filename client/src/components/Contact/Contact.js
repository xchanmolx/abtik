import React from 'react';
import { Random } from 'react-animated-text';

import classes from './Contact.module.css';
import Footer from '../Navigation/Footer/Footer';
import { Alert } from 'reactstrap';

const TextRandom = () => (
    <Random 
    text="CONTACT"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const Contact = () => (
    <div className={classes.Contact}>
        <Alert color="info">
            <h1><TextRandom /></h1>
        </Alert>
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

export default Contact;