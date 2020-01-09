import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Balamban = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>BALAMBAN</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>BALAMBAN</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>POLICE</h6></Badge>
                <h6>Mobile Phone</h6>
                    0995-322-2176
                    <p>0998-598-6365</p>
                <h6>Telephone</h6>
                    <p>032-333-2477</p>
                <hr />
                <Badge color="danger"><h6>HOSPITAL</h6></Badge>
                <h6>Telephone</h6>
                    <p>032-260-0543</p>
                <hr />
                <Badge color="danger"><h6>RESCUE</h6></Badge>
                <h6>Mobile Phone</h6>
                    0995-031-8012
                    <p>0930-267-6082</p>
                <h6>Telephone</h6>
                    032-463-9686
                <hr />
                <Badge color="danger"><h6>FIRE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0917-779-7123</p>
                <h6>Telephone</h6>
                    032-345-5894
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Balamban;