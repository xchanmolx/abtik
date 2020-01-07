import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert
} from 'reactstrap';
import earthquake from '../../assets/images/earthquake.png';

const Linog = (props) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (    
        <div>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Linog</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody style={{backgroundImage: `url(${earthquake})`, color: '#FF851B'}}>
                <Alert color="info">
                    <h4>Linog</h4>
                </Alert>
                <p><strong>(5) Lima ka pahimangno sa wala pa ang linog!</strong></p>
                <p>1. Pagplano - Ang labing maayong paagi sa paglikay sa katalagman.</p>
                <p>2. Pagpangandam - Sa balay, trabahoan o sa eskwelahan.</p>
                <p>3. Sarya kon asa ang mga agianan pagawas - Fire extinguisher, gamit sa pagpanambal, alarmahan ug mga pasilidad sa komunikasyon sama sa telepono.</p>
                <p>4. Tun-i ang paggamit niini sa dili pa moabot ang katalagman.</p>
                <p>5. Mohimo ug moapil sa regular nga mga "Earthquake Drill" sa buhaton dihang may linog aron makahibalo sa sakto nga buhaton dihang may linog.</p>
                <p><strong>(3) Tulo ka pahimangno sa panahon sa linog!</strong></p>
                <p>1. <strong>Sa sulod sa building o balay</strong></p>
                <p><strong>Duck, Cover and Hold</strong> (Tago ilalom sa lig-ong lamesa, kupot niini, o itabon ang mga bukton sa imong ulo).</p>
                <p>Ayaw gula samtang naglinog pa, ayaw kataranta.</p>
                <p>2. <strong>Sa sulod sa sakyanan</strong></p>
                <p>Ipadaplin sa kalsada ug ihunong ang sakyanan, ayaw agi sa mga overpass, tulay ug poste o linya sa koryente nga tingali naguba sa linog, ayawg gawas sakyanan ug naglinog pa.</p>
                <p>3. <strong>Sa gawas sa building o tulunghaan</strong></p>
                <p>Palayo sa punoan sa kahoy, linya sa koryente, poste ug konkretong building.</p>
                <p>Palayo sa mga bakilid nga lagmit mag landslide, kon duol sa dagat ug makatikod nga milinog, ilabina kon kusog kaayo, dagan dayon sa mas taas nga lugar.</p>
                <p><strong>(3) Tulo ka pahimangno sa humana ang linog!</strong></p>
                <p>1. Ayaw paggamit ug elebitor, pagsulod sa mga guba nga building.</p>
                <p>2. Susiha ang kaugalingon ug ang uban basin nasamad, ang tubo sa tubig ug linya sa koryente basin nadaot, mga kemikal basin naay makahilong kemikal ug daling mosilaab nga likido nga miagas o mitulo, basin may sunog ug palonga dayon para di mokatap.</p>
                <p>3. <strong>Kon matanggong sa natumpag nga estruktura</strong></p>
                <p>Ayaw pagdagkot ug posporo, ayawg lihok o paphaon ang abog, taboni ang imong baba sa panyo o panapton, pukpoka ang tubo o bungbong para matultolan dayon sa mga tigreskyu. Kon dunay pito gamitakini, ayaw pagsinggit basin makasimhot kag daghang abog, singgit lang kon wala nay gayoy laing paagi.</p>
            </CardBody>
            </Card>
            </Collapse>
        </div>                       
    )
}

export default Linog;