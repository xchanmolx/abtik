import React from 'react';
import { Random } from 'react-animated-text';

import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

import classes from './Preparedness.module.css';
import Footer from '../Navigation/Footer/Footer';

const TextRandom = () => (
    <Random 
    text="Pagpangandam sa"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const advisory = () => {
    return (
        <div>
            
        </div>
    );
}

export default advisory;