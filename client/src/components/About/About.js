import React, { Component } from 'react';

import {
    Jumbotron
} from 'reactstrap';

import classes from './About.module.css';

class About extends Component {    

    render () {
        return (
                <div className={classes.About}>  
                    <Jumbotron>
                    <h1>ABTIK, Rescue</h1>
                    <h6>Andam Batok sa mga Trahedya Ingon man sa mga Katalagman</h6>
                    </Jumbotron>
                    <p>The MDRRMO of the Municipality of Aloguinsan spearheaded by our Municipal Mayor, Cesare Ignatius G. Moreno.</p>
                    <p>Municipal Disaster Risk Reduction and Management Office (MDRRMO) is the government organization and management of resources and responsibilities for dealing with all humanitarian aspects of emergencies, in particular preparedness, response and recovery in order to lessen the impact of disasters.</p>
                    <hr />
                    <h6>MISSION</h6>
                    <p>To manage disasters by co-ordinating the resources of government institutions and non-governmental agencies, and developing the capacity of communities to respond effectively to disasters and improve their livelihood through social mobilization, employment generation and poverty reduction projects.</p>
                </div>
        );
    }    
}    

export default About;