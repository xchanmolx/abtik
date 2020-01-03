import React, { Component } from 'react';

import classes from './Home.module.css';
import Footer from '../../components/Navigation/Footer/Footer';
import { Random } from 'react-animated-text';
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';

const TextRandom = () => (
    <Random 
    text="Pagpangandam sa"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

class Home extends Component {
    render () {
        return (            
            <Container className={classes.Home}>
                <Row>
                    <Col>
                        <Jumbotron>                  
                            <h3>Welcome to ABTIK, Rescue</h3>
                            <p>Andam Batok sa mga Trahedya Ingon man sa mga Katalagman</p>
                            <hr />
                            <h5>Municipality of Aloguinsan</h5>
                            <p>Municipal Disaster Risk Reduction and Management Office (MDRRMO)</p>
                        </Jumbotron>    
                    </Col>
                </Row>
                <Row>
                    <Col>     
                        <h4><TextRandom /></h4>
                        <p>Bagyo, Baha, Linog, ug Sunog!</p>   
                        <hr />                                      
                        <h4>Bagyo</h4>
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
                        <hr />
                        <h4>Baha</h4>
                        <p><strong>(8) Walo ka pahimangno sa wala pa ang baha!</strong></p>
                        <p>1. Paminaw sa radyo sa mga pahimangno sa emerhensiya.</p>
                        <p>2. Angay nga alerto sa posibleng pag baha, kon padayon ang pag-ulan sa pipila ka adlaw.</p>
                        <p>3. Palayo sa lugar nga dali rang bahaon.</p>
                        <p>4. Pagpundog ilimnong tubig sa mga sudlanan.</p>
                        <p>5. Ibalhin ang mga kabtangan sa ibabaw nga andana sa balay o taas nga puwesto.</p>
                        <p>6. Dad-a ang binuhing mga hayop sa taas nga lugar.</p>
                        <p>7. Kon giabisohan sa pagbakwit, lihok dayon, ayaw ug kataranta, ug balhin sa mas luwas nga lugar sa dili pa masanapan sa bahaang agianan.</p>
                        <p>8. Sa dili pa mobakwit, patya ang koryente sa balay sa plangka mismo niini ug kandadohi ang inyong balay.</p>
                        <p><strong>(6) Unom ka pahimangno sa panahon sa baha!</strong></p>
                        <p>1. Pagbantay sa mga dalan o mga taytayan nga nasanapan sa baha.</p>
                        <p>2. Palayo sa mga alambre o kable sa koryente.</p>
                        <p>3. Ayawg paglangoylangoy o pagbangka sa midakong tubig sa sapa.</p>
                        <p>4. Ayaw ug tabok sa mga sapa nga kusog ang sulong ug ang tubig lapas sa tuhod.</p>
                        <p>5. Inom ug limpyong tubig o kanang gipabukalan lamang.</p>
                        <p>6. Kaon lamang ug luto pag-ayong pagkaon, ug panegurua nga dili makontaminar ang salin nga pagkaon.</p>
                        <p><strong>(5) Lima ka pahimangno sa humana ang baha!</strong></p>
                        <p>1. Pagmatngon kon mosulod sa balay/building paggamit ug flashlight, parol o sulo.</p>
                        <p>2. Angayan nga alerto sa mahimong hinungdan sa sunog sama sa putol nga alambre sa koryente.</p>
                        <p>3. Ayaw pagkaon ug pag-inom ug tubig nga nakontaminar sa tubig baha.</p>
                        <p>4. Ireport ang guba nga linya sa koryente, tubig, gas, ug telepono sa hingtungdang ahensiya niini.</p>
                        <p>5. Ayaw ablihi ang plangka sa koryente o paggamit ug mga appliances ug ubang kagamitan gawas kon nasusi na sa hanas nga electrician.</p>
                        <hr />
                        <h4>Linog</h4>
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
                        <hr />
                        <h4>Sunog</h4>
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
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Home;