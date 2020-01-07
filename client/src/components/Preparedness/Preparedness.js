import React from 'react';
import { Random } from 'react-animated-text';

import {
    Container,
    Row,
    Col,
    Alert
} from 'reactstrap';

import classes from './Preparedness.module.css';
import Footer from '../Navigation/Footer/Footer';
import Bagyo from './Bagyo';
import Baha from './Baha';
import Linog from './Linog';
import Sunog from './Sunog';

const TextRandom = () => (
    <Random 
    text="Pagpangandam sa"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const preparedness = () => {
    return (
        <Container className={classes.Preparedness}>
                <Row>
                    <Col>     
                        <Alert color="info">
                        <h3><TextRandom /></h3>
                        <p>Bagyo, Baha, Linog, ug Sunog!</p>   
                        </Alert>
                        <Alert color="success">
                            <p><em>Pindota ang matag kalamidad alang sa mga pahimangno.</em></p>
                        </Alert>
                        <Bagyo />
                        <Baha />
                        <Linog />
                        <Sunog />
                    </Col>
                </Row>
            <Footer />
        </Container>
    );
}

export default preparedness;