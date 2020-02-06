import React, { useState } from 'react';
import { Random } from 'react-animated-text';

import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert,
    Container,
    Row,
    Col,
    Table
} from 'reactstrap';

import classes from './CitizenCharter.module.css';
import Footer from '../Navigation/Footer/Footer'

const TextRandom = () => (
    <Random 
    text="Citizen's Charter"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const CitizenCharter = (props) => {    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        // <div className={classes.CitizenCharter}>
            
                <Container className={classes.CitizenCharter}>
                    <Alert color="warning" style={{textAlign: 'center'}}>
                    <h2><TextRandom /></h2>
                    </Alert>
                    <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>click to SERVICES</Button>
                    <Collapse isOpen={isOpen}>
                    <Card>
                    <CardBody>
                    <Row>
                        <Col sm="12">
                            <Table>
                                <thead>
                                    <tr>
                                    <th>FRONTLINE<br /> SERVICE</th>
                                    <th>ACTIVITY<br /><p></p></th>
                                    <th>RESPONSE<br /> TIME</th>
                                    <th>PERSON/S<br /> RESPONSIBLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                            <td>Request for Data,<br /> Technical Assistance,<br /> Training and Services</td>
                                            <td>Submit Request Letter</td>
                                            <td>1 minute</td>
                                            <td>Client</td>
                                    </tr>
                                    <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@mdo</td>

                                    </tr>
                                    <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@mdo</td>

                                    </tr>
                                    <tr>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    </CardBody>
                    </Card>
                    </Collapse>
                    <Footer />
                </Container>
                
    );
        
}    

export default CitizenCharter;