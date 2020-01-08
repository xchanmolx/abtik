import React from 'react';

import {
    Container,
    Row,
    Col,
    Alert,
    Badge
} from 'reactstrap';

import classes from './Advisory.module.css';

const advisory = (props) => {
    let title = '';
    let date = '';
    let time = '';
    let text = '';

    return (
        <div>
            <Container className={classes.Advisory}>
                <Row>
                    <Col>
                        <Alert color="info">
                            <p><strong>{props.title}</strong></p>
                            <p><Badge color="warning">Date:</Badge> {props.date}</p>
                            <p><Badge color="warning">Time:</Badge> {props.time}</p>
                            <p>{props.text}</p>
                            <p>{props.children}</p>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default advisory;