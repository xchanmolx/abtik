import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Pinamungajan = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>PINAMUNGAJAN</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>PINAMUNGAJAN</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0921-425-5898</p>
                <hr />
                <Badge color="danger"><h6>HOSPITAL</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-468-9239</p>
                <hr />
                <Badge color="danger"><h6>Rescue - PEDRU</h6></Badge>
                <h6>Mobile Phone</h6>
                    0949-802-4194
                    <p>0932-103-7600</p>
                <h6>Telephone</h6>
                    032-463-9686
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Telephone</h6>
                    032-468-9072
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Pinamungajan;