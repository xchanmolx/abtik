import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert
} from 'reactstrap';

const Sunog = (props) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (    
        <div>
            <Button color="danger" onClick={toggle} style={{ marginBottom: '1rem' }}>Sunog</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody>
                <Alert color="danger">
                    <h4>Sunog</h4>
                </Alert>                
                <p><strong>(8) Walo ka pahimangno sa wala pa ang sunog!</strong></p>
                <p>1. Ayaw pasobrahi ug saksak ang saksakanan.</p>
                <p>2. Tangtanga sa saksakanan ang mga aplayanses kon wala na gamita.</p>
                <p>3. Susiha ang <strong>gas stove</strong> o tangke sa gasul kon may hungaw.</p>
                <p>4. Ingna ang mga bata nga magpalayo sa likido nga daling mosilaab, o mag-duladulag <strong>lighter</strong> o posporo.</p>
                <p>5. Ayaw panigarilyo kon naa sa higdaanan.</p>
                <p>6. Mag-amping pirme samtang magluto.</p>
                <p>7. Ayaw pasagdai ang nagsigang kandila nga walay nagbantay.</p>
                <p>8. Sunda gayod ang pasidaan nga <strong>"No Smoking"</strong> o dili manigarilyo.</p>
                <p><strong>(7) Pito ka pahimangno sa panahon sa sunog!</strong></p>
                <p>1. <strong>Kon naa sulod sa building</strong></p>
                <p>(Opisina, shopping mall, ug uban pa), sarya kon asa ang "Fire Exit".</p>
                <p>2. <strong>Gamit ug fire extinguisher</strong></p>
                <p>Sa pagpalong sa gamayng sunog, ayaw paggamit ug tubig kon koryente o kemikal ang hinungdan sa sunog.</p>
                <p>3. <strong>Sa sunog</strong></p>
                <p>Kon midako na ang sunog pahawa dayon nianang lugara.</p>
                <p>4. <strong>Kung aso</strong></p>
                <p>Kon dunay aso, kamang paingon sa gawasan.</p>
                <p>5. <strong>Isampong</strong></p>
                <p>Pagkuhag panapton o tualya, bas-a ug isampong sa imong baba aron dili makasimhot ug aso.</p>
                <p>6. <strong>Higda</strong></p>
                <p>Kon masunog ang sinina ayawg dagan... ("Hunong, Higda, ug Ligid").</p>
                <p>7. <strong>Singgit</strong></p>
                <p>Singgit ug pangayog tabang.</p>
                <p><strong>(4) Upat ka pahimangno sa humana ang sunog!</strong></p>
                <p>1. Ayawg sulod sa nagubang balay o apartment gawas kon giingnan sa departamento sa sunog nga pwede na.</p>
                <p>2. Pagmatngon sa mga guba sa sunog, ang gubang atop ug salog posibleng mohagsa.</p>
                <p>3. Seguradohon sa mga bombero nga luwas nang gamiton ang linya sa tubig, koryente ug gas.</p>
                <p>4. Ayawg kaon, inom ug simhot sa bisan unsa nga naduol sa kalayo, aso anuos, o tubig nga gigamit pagpalong sa sunog, kay delikadong madaot ug masakit ka niini.</p>
            </CardBody>
            </Card>
            </Collapse>
        </div>                       
    )
}

export default Sunog;