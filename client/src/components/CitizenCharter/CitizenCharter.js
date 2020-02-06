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
        <Container className={classes.CitizenCharter}>
            <Alert color="warning" style={{textAlign: 'center'}}>
            <h2><TextRandom /></h2>
            </Alert>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>SERVICES</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody>
            <Row>
                <Col sm="12">
                    <Table striped>
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
                                    <td></td>
                                    <td>Verify and<br /> evaluate request</td>
                                    <td>10 minutes</td>
                                    <td>Admin and <br />Training Section Staff</td>

                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Arrange schedule,<br /> venue, and other<br />logistical requirements</td>
                                    <td>1 hour</td>
                                    <td>Admin and Training Section<br />Staff/Operation and<br />Warning Section Staff</td>

                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Receive document,<br />conduct of training,<br />orientation, seminar or<br />drill/simulation exercise</td>
                                    <td>Variable to the<br />nature of request</td>
                                    <td>Admin and Training Section<br />Staff/Operation and<br />Warning Section Staff</td>
                            </tr>
                            <tr>
                                    <td>Emergency Response,<br />Search and Rescue Services</td>
                                    <td>Call Emergency Hotline<br />Landline: (032) 469 9041<br />Globe: 0926 530 7338<br />Sun: 0922 238 8140</td>
                                    <td>3 minutes upon<br />the receipt of call</td>
                                    <td>MDRRMO Staff<br />PNP<br />BFP</td>
                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Dispatch and issue mission<br />order to the responding<br />rescue team</td>
                                    <td>2 minutes</td>
                                    <td>MDRRMO Staff</td>
                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Render appropriate assistance<br />(emergency response and<br />other related services)</td>
                                    <td>Depending on the<br />severity of the case</td>
                                    <td>ABTIK Rescue Team<br />PNP</td>
                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Refer to appropriate<br />Healthcare Facility<br />if necessary</td>
                                    <td>Depending on the<br />distance of the<br />health care facility</td>
                                    <td>ABTIK Rescue Team</td>
                            </tr>
                            <tr>
                                    <td>Calamity Assistance<br />(Evacuation and Rescue)</td>
                                    <td>Implement pre-emptive<br />and force evacuation<br />based on the DRRM Protocol</td>
                                    <td>A day before<br />and/or time<br />of disaster</td>
                                    <td>MDRRMO Staff<br />PNP<br />BFP<br />BDRRMC</td>
                            </tr>
                            <tr>
                                    <td>Clearing Operation</td>
                                    <td>Request thru telephone,<br />mobile, email<br />or personal</td>
                                    <td>1-3 minutes</td>
                                    <td>MDRRMO Staff</td>
                            </tr>
                            <tr>
                                    <td></td>
                                    <td>Scheduling of the<br />clearing operation</td>
                                    <td>5 minutes</td>
                                    <td>MDRRMO Staff<br />BDRRMC</td>
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