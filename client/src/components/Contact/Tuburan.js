import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Tuburan = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>TUBURAN</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>TUBURAN</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0998-598-6368</p>
                <h6>Telephone</h6>
                    <p>032-463-9075</p>
                <hr />
                <Badge color="danger"><h6>HOSPITAL</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-463-9515</p>
                <hr />
                <Badge color="danger"><h6>RESCUE - ANDAM</h6></Badge>
                <h6>Mobile Phone</h6>
                    0995-199-0842
                    <p>0933-214-1382</p>
                <h6>Telephone</h6>
                    <p>032-463-9130</p>
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-463-9055</p>
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Tuburan;