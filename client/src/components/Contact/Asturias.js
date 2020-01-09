import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Asturias = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>ASTURIAS</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>ASTURIAS</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0998-598-6367</p>
                <h6>Telephone</h6>
                    <p>032-464-9400</p>
                <hr />
                <Badge color="danger"><h6>INFIRMARY CLINIC</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-464-9103</p>
                <hr />
                <Badge color="danger"><h6>RESCUE - AERO</h6></Badge>
                <h6>Mobile Phone</h6>
                    0917-127-5524
                    <p>0912-080-9464</p>
                <h6>Telephone</h6>
                    <p>032-324-3354</p>
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0933-487-5648</p>
                <h6>Telephone</h6>
                    <p>032-464-1056</p>
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Asturias;