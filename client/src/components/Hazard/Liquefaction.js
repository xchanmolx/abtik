import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert,
    Badge
} from 'reactstrap';

const Liquefaction = (props) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (    
        <div>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Liquefaction</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody>
                <Alert color="info">
                    <h5>Liquefaction</h5>
                </Alert>
                <h6>Under <Badge color="warning">CONSTRUCTION!</Badge></h6>
            </CardBody>
            </Card>
            </Collapse>
        </div>                       
    )
}

export default Liquefaction;