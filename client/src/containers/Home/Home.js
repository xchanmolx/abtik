import React, { Component } from 'react';

import classes from './Home.module.css';
import Footer from '../../components/Navigation/Footer/Footer';
import { Random } from 'react-animated-text';
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

const TextRandom = () => (
    <Random 
    text="Pagpangandam sa"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

class Home extends Component {
    render () {
        return (
            <Container className={classes.Home}>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1><TextRandom /></h1>
                            <h6>Bagyo, Baha, Linog, ug Sunog!</h6>
                        </Jumbotron>    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Home;