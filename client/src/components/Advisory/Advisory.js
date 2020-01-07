import React from 'react';

import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import classes from './Advisory.module.css';

const advisory = (props) => {
    let title = '';
    let date = '';
    let text = '';

    return (
        <div>
            <Container className={classes.Advisory}>
                <Row>
                    <Col>
                        <p><strong>{props.title}</strong></p>
                        <p>{props.date}</p>
                        <p>{props.text}</p>
                        <p>{props.children}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default advisory;