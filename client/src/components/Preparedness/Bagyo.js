import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert
} from 'reactstrap';

const Bagyo = (props) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (    
        <div>
            <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Bagyo</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody>
                <Alert color="warning">
                    <h4>Bagyo</h4>
                </Alert>                
                <p><strong>(6) Unom ka pahimangno sa wala pa ang bagyo!</strong></p>
                <p>1. Kanunay mag-subay sa balita bahin sa panahon.</p>
                <p>2. Pag-pundo ug igo nga pagkaon ug tubig mainom.</p>
                <p>3. Ayoha ang mga guba nga parte sa balay.</p>
                <p>4. Ibutang ang flashlight sa lugar na makab-ot.</p>
                <p>5. Ibutang sa luwas nga lugar ang mga kahayopan.</p>
                <p>6. Pag-dala ug bisti, pagkaon ug tambal kung mobakwit.</p>
                <p><strong>(5) Lima ka pahimangno sa panahon sa bagyo!</strong></p>
                <p>1. Mag-balantayon sa mga delikadong mga butang.</p>
                <p>2. Ayaw pag-tunob ug baha ug hitak nga lugar.</p>
                <p>3. Pag-pundo lang sa sulod sa panimalay.</p>
                <p>4. Kanunay mag-subay sa mga balita bahin sa panahon.</p>
                <p>5. Kung hugaw ang tubig, pabukala kini sulod sa 20 minutos.</p>
                <p><strong>(4) Upat ka pahimangno sa humana ang bagyo!</strong></p>
                <p>1. Sigurado-a nga luwas ang panimalay ug walay makasulod nga mga malang mananap.</p>
                <p>2. Pag-bantay sa mga kable sa kuryente ug poste.</p>
                <p>3. Ipahibalo dayon kung dunay makita nga guba sa poste.</p>
                <p>4. Aron pag-likay sa mga lamok tabuni ang mga sudlanan sa pundo nga tubig.</p> 
            </CardBody>
            </Card>
            </Collapse>
        </div>                       
    )
}

export default Bagyo;