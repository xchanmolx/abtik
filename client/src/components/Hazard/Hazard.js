import React from 'react';
import { Random } from 'react-animated-text';

import {
    Container,
    Row,
    Col,
    Alert
} from 'reactstrap';

import classes from './Hazard.module.css';
import Footer from '../Navigation/Footer/Footer';
import Flood from './Flood';
import Landslide from './Landslide';
import Liquefaction from './Liquefaction';
import StormSurge from './StormSurge';

const TextRandom = () => (
    <Random 
    text="Hazard Map"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const Hazard = () => {
    return (
        <Container className={classes.Hazard}>
                <Row>
                    <Col>     
                        <Alert color="info">
                        <h3><TextRandom /></h3>
                        </Alert>
                        <Alert color="success">
                            <p><em>Click on the hazard to view their graphical information.</em></p>
                        </Alert>
                        <Flood />
                        <Landslide />
                        <Liquefaction />
                        <StormSurge />
                    </Col>
                </Row>
            <Footer />
        </Container>
    );
}

export default Hazard;