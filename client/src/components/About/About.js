import React, { Component } from 'react';
import { Random } from 'react-animated-text';

import {
    Alert
} from 'reactstrap';

import classes from './About.module.css';
import Footer from '../Navigation/Footer/Footer'

const TextRandom = () => (
    <Random 
    text="ABTIK, Rescue"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

class About extends Component {    

    render () {
        return (
                <div className={classes.About}>  
                    <Alert color="info">
                    <h1><TextRandom /></h1>
                    <h6>Andam Batok sa mga Trahedya Ingon man sa mga Katalagman</h6>
                    </Alert>
                    <p>The MDRRMO of the Municipality of Aloguinsan spearheaded by our Municipal Mayor, Cesare Ignatius G. Moreno.</p>
                    <p>Municipal Disaster Risk Reduction and Management Office (MDRRMO) is the government organization and management of resources and responsibilities for dealing with all humanitarian aspects of emergencies, in particular preparedness, response and recovery in order to lessen the impact of disasters.</p>
                    <hr />
                    <h6>MISSION</h6>
                    <p>To manage disasters by co-ordinating the resources of government institutions and non-governmental agencies, and developing the capacity of communities to respond effectively to disasters and improve their livelihood through social mobilization, employment generation and poverty reduction projects.</p>
                    <Footer />
                </div>
        );
    }    
}    

export default About;