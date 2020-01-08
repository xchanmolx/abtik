import React, { Component } from 'react';

import classes from './Home.module.css';
import Footer from '../../components/Navigation/Footer/Footer';
import Advisory from '../../components/Advisory/Advisory';
import { Random } from 'react-animated-text';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Alert
} from 'reactstrap';

const TextRandom = () => (
    <Random 
    text="Announcement / Advisory"
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
                        <Alert color="warning">
                            <h4><TextRandom /></h4>
                        </Alert>  
                        <Advisory 
                            title="Nationwide Simultaneous Earthquake Drill (NSED)" 
                            date="Date: Thursday, March 12, 2020 at 2:00pm" 
                            text="Responder is a must to participate in the earthquake drill." />
                        <Advisory 
                            title="Sinulog at Bonbon, Aloguinsan" 
                            date="Date: Saturday, January 04, 2020" 
                            text="Responders are in need." />
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Home;