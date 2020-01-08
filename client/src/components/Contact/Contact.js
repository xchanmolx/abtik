import React from 'react';
import { Random } from 'react-animated-text';

import classes from './Contact.module.css';
import Footer from '../Navigation/Footer/Footer';
import { 
    Alert,
    Toast,
    ToastHeader,
    ToastBody,
    Badge
} from 'reactstrap';

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
        <Alert color="warning" style={{textAlign: 'center'}}>
            <h1><TextRandom /></h1>            
        </Alert>
        <Alert color="danger" style={{textAlign: 'center'}}>
            <h3>3rd District Emergency Numbers</h3>
        </Alert>
        <div className="p-3 bg-info my-2 rounded">
            <Toast>
            <ToastHeader>
                <h4>ALOGUINSAN</h4>
            </ToastHeader>
            <ToastBody>
            <Badge color="warning"><h6>Rescue - ABTIK</h6></Badge>
            <h6>Mobile Phone</h6>
                0926-530-7338
                <p>0922-238-8140</p>
            <h6>Telephone</h6>
                <p>032-469-9041</p>
            <h6>Email Address</h6>
                <p>aloguinsandrrmo@gmail.com</p>
            <hr />
            <Badge color="warning"><h6>POLICE</h6></Badge>
            <h6>Mobile Phone</h6>
                <p>0908-916-7215</p>
            <h6>Telephone</h6>
                032-469-9909<br />
            </ToastBody>
            </Toast>
        </div>
        <Footer />
    </div>
);

export default Contact;