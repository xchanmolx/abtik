import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert,
    Row,
    Col
} from 'reactstrap';

import classes from './NCOVImages.module.css';
import ncov1 from '../../assets/images/ncov1.jpg';
import ncov2 from '../../assets/images/ncov2.jpg';
import ncov3 from '../../assets/images/ncov3.jpg';
import ncov4 from '../../assets/images/ncov4.jpg';
import ncov5 from '../../assets/images/ncov5.jpg';
import ncov6 from '../../assets/images/ncov6.jpg';

const NCOVImages = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={classes.NCOVImages} style={{height: props.height}}>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>2019 nCoV</Button>
                <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                <Row>
                    <Col>
                        <Alert color="info">
                            2019-nCoV
                        </Alert>
                        <img src={ncov1} alt="2019-nCoV" />
                        <hr />
                        <img src={ncov2} alt="2019-nCoV" />
                        <hr />
                        <img src={ncov3} alt="2019-nCoV" />
                        <hr />
                        <img src={ncov4} alt="2019-nCoV" />
                        <hr />
                        <img src={ncov5} alt="2019-nCoV" />
                        <hr />
                        <img src={ncov6} alt="2019-nCoV" />
                    </Col>
                </Row>
                </CardBody>
                </Card>
                </Collapse>
        </div>
    );
}

export default NCOVImages;