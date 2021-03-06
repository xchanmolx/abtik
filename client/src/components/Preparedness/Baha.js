import React, { useState } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card,
    Alert,
    Badge
} from 'reactstrap';
import flood from '../../assets/images/flood.png';

const Baha = (props) => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (    
        <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Baha</Button>
            <Collapse isOpen={isOpen}>
            <Card>
            <CardBody style={{backgroundImage: `url(${flood})`}}>
                <Alert color="primary">
                    <h4>Baha</h4>
                </Alert>                
                <p><strong>(8) Walo ka pahimangno <Badge color="warning">sa wala</Badge> pa ang baha!</strong></p>
                <p>1. Paminaw sa radyo sa mga pahimangno sa emerhensiya.</p>
                <p>2. Angay nga alerto sa posibleng pag baha, kon padayon ang pag-ulan sa pipila ka adlaw.</p>
                <p>3. Palayo sa lugar nga dali rang bahaon.</p>
                <p>4. Pagpundog ilimnong tubig sa mga sudlanan.</p>
                <p>5. Ibalhin ang mga kabtangan sa ibabaw nga andana sa balay o taas nga puwesto.</p>
                <p>6. Dad-a ang binuhing mga hayop sa taas nga lugar.</p>
                <p>7. Kon giabisohan sa pagbakwit, lihok dayon, ayaw ug kataranta, ug balhin sa mas luwas nga lugar sa dili pa masanapan sa bahaang agianan.</p>
                <p>8. Sa dili pa mobakwit, patya ang koryente sa balay sa plangka mismo niini ug kandadohi ang inyong balay.</p>
                <p><strong>(6) Unom ka pahimangno <Badge color="warning">sa panahon</Badge> sa baha!</strong></p>
                <p>1. Pagbantay sa mga dalan o mga taytayan nga nasanapan sa baha.</p>
                <p>2. Palayo sa mga alambre o kable sa koryente.</p>
                <p>3. Ayawg paglangoylangoy o pagbangka sa midakong tubig sa sapa.</p>
                <p>4. Ayaw ug tabok sa mga sapa nga kusog ang sulong ug ang tubig lapas sa tuhod.</p>
                <p>5. Inom ug limpyong tubig o kanang gipabukalan lamang.</p>
                <p>6. Kaon lamang ug luto pag-ayong pagkaon, ug panegurua nga dili makontaminar ang salin nga pagkaon.</p>
                <p><strong>Unsay buhaton kon naabtan <Badge color="warning">sa kalit</Badge> nga pagbaha!</strong></p>
                <p>- Ayaw kataranta, sarya ang limitasyon sa imong sakyanan.</p>
                <p>- <Badge color="danger">Kon naanod ka sa kusog nga sulog -</Badge> Seguroa nga ang imong mga tiil nag-ubay ug dili sungsong sa agos. Mopaibabaw o maningkamot nga dili masuong ilalom sa masugatang gapnod, ali o sanga. Abiba sa bisan unsang butang molutaw.</p>
                <p>- <Badge color="danger">Kon tanggong sa kahoy o building -</Badge> Ayaw ug biya/kanaog ug molusong sa tubig baha, pabilin ug paghulat sa mga moreskyu.</p>
                <p><strong>(5) Lima ka pahimangno <Badge color="warning">sa humana</Badge> ang baha!</strong></p>
                <p>1. Pagmatngon kon mosulod sa balay/building paggamit ug flashlight, parol o sulo.</p>
                <p>2. Angayan nga alerto sa mahimong hinungdan sa sunog sama sa putol nga alambre sa koryente.</p>
                <p>3. Ayaw pagkaon ug pag-inom ug tubig nga nakontaminar sa tubig baha.</p>
                <p>4. Ireport ang guba nga linya sa koryente, tubig, gas, ug telepono sa hingtungdang ahensiya niini.</p>
                <p>5. Ayaw ablihi ang plangka sa koryente o paggamit ug mga appliances ug ubang kagamitan gawas kon nasusi na sa hanas nga electrician.</p> 
            </CardBody>
            </Card>
            </Collapse>
        </div>                       
    )
}

export default Baha;