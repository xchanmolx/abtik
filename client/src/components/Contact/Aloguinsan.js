import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Aloguinsan = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>ALOGUINSAN</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>ALOGUINSAN</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>Rescue - ABTIK</h6></Badge>
                <h6>Mobile Phone</h6>
                    0926-530-7338
                    <p>0922-238-8140</p>
                <h6>Telephone</h6>
                    <p>032-469-9041</p>
                <h6>Email Address</h6>
                    aloguinsandrrmo@gmail.com
                <hr />
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0908-916-7215</p>
                <h6>Telephone</h6>
                    032-469-9909
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0936-861-8093</p>
                <h6>Telephone</h6>
                    032-469-0016
                <hr />
                <Badge color="danger"><h6>HEALTH CENTER</h6></Badge>
                <h6>Telephone</h6>
                    032-469-9033
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Aloguinsan;