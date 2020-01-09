import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Barili = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>BARILI</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>BARILI</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0922-218-8661</p>
                <h6>Telephone</h6>
                    <p>032-470-9029</p>
                <hr />
                <Badge color="danger"><h6>HOSPITAL</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-470-9026</p>
                <hr />
                <Badge color="danger"><h6>RESCUE</h6></Badge>
                <h6>Mobile Phone</h6>
                    0956-771-2336
                    <p>0908-719-8334</p>
                <h6>Telephone</h6>
                    <p>032-470-9545</p>
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-470-9155</p>
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Barili;