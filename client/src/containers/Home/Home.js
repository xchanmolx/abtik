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
    text="Announcements"
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
                            <h3>Welcome to ABTIK, Rescue</h3>
                            <p>Andam Batok sa mga Trahedya Ingon man sa mga Katalagman</p>
                            <hr />
                            <h5>Municipality of Aloguinsan</h5>
                            <p>Municipal Disaster Risk Reduction and Management Office (MDRRMO)</p>
                        </Jumbotron>    
                    </Col>
                </Row>
                <Row>
                    <Col>     
                        <h4><TextRandom /></h4>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Home;