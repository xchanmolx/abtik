import React from 'react';
import { Random } from 'react-animated-text';

import classes from './Contact.module.css';
import Footer from '../Navigation/Footer/Footer';
import Aloguinsan from './Aloguinsan';
import Pinamungajan from './Pinamungajan';
import Balamban from './Balamban';
import Asturias from './Asturias';
import Tuburan from './Tuburan';
import Barili from './Barili';
import Toledo from './Toledo';

import {
    Alert
} from 'reactstrap';

const TextRandom = () => (
    <Random 
    text="3rd District Emergency Numbers"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const Contact = () => (
    <div className={classes.Contact}>        
        <Alert color="danger" style={{textAlign: 'center'}}>
            <h3><TextRandom /></h3>
        </Alert>
        <div className="p-3 bg-info my-2 rounded">
            <Alert color="info">
                Click on the municipality or city to view their contact information.
            </Alert>
            <Aloguinsan />
            <Pinamungajan />
            <Balamban />
            <Asturias />
            <Tuburan />
            <Barili />
            <Toledo />
        </div>
        <Footer />
    </div>
);

export default Contact;