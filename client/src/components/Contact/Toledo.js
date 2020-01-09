import React, { useState } from 'react';

import { 
    Toast,
    ToastHeader,
    ToastBody,
    Badge,
    Button,
    Collapse
} from 'reactstrap';

const Toledo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>TOLEDO CITY</Button>
            <Collapse isOpen={isOpen}>
                <Toast>
                <ToastHeader>
                    <h4>TOLEDO CITY</h4>
                </ToastHeader>
                <ToastBody>
                <Badge color="danger"><h6>CDRRMO / RESCUE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0977-834-7619</p>
                <h6>Telephone</h6>
                    <p>032-322-7911</p>
                <hr />
                <Badge color="danger"><h6>FIRE POBLACION</h6></Badge>
                <h6>Telephone</h6>
                    032-467-9115
                    <p>032-467-9006</p>
                <hr />
                <Badge color="danger"><h6>FIRE DAS</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0917-706-2673</p>
                <hr />
                <Badge color="danger"><h6>CITY HOSPITAL</h6></Badge>
                <h6>Telephone</h6>
                    032-466-4205
                    <p>032-466-4204</p>
                <hr />
                <Badge color="danger"><h6>POLICE TEXT HOTLINE</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0998-967-3822</p>
                <hr />
                <Badge color="danger"><h6>POLICE FRONT DESK</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0915-642-6842</p>
                <hr />
                <Badge color="danger"><h6>POLICE LANDLINE</h6></Badge>
                <h6>Telephone</h6>
                    032-322-5165
                    <p>032-322-5166</p>
                <hr />
                <Badge color="danger"><h6>POLICE DAS SUBS</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0905-270-5116</p>
                <hr />
                <Badge color="danger"><h6>POLICE MAINGGIT SUBS</h6></Badge>
                <h6>Mobile Phone</h6>
                    <p>0905-270-5056</p>
                </ToastBody>
                </Toast>
            </Collapse>                        
        </div>
    );
}

export default Toledo;