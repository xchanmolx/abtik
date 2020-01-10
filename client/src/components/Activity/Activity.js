import React from 'react';
import { Random } from 'react-animated-text';

import {
    Container,
    Row,
    Col,
    Alert
} from 'reactstrap';

import classes from './Activity.module.css';
import Footer from '../Navigation/Footer/Footer';
import PPAimages from './PPAimages';

const TextRandom = () => (
    <Random 
    text="Projects, Programs and Activities"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const Activity = () => {
    return (
        <Container className={classes.Activity}>
                <Row>
                    <Col>     
                        <Alert color="info">
                        <h3><TextRandom /></h3>
                        </Alert>
                        <PPAimages />
                    </Col>
                </Row>
            <Footer />
        </Container>
    );
}

export default Activity;