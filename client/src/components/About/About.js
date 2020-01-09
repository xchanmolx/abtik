import React, { Component } from 'react';
import { Random } from 'react-animated-text';

import {
    Alert   
} from 'reactstrap';

import classes from './About.module.css';
import Footer from '../Navigation/Footer/Footer'

const TextRandom = () => (
    <Random 
    text="Aloguinsan"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

class About extends Component {    

    render () {
        return (
                <div className={classes.About}>                      
                    <div className="p-3 bg-info my-2 rounded">
                    <Alert color="secondary">
                        <p>Republic of the Philippines<br />
                        Province of Cebu<br />
                        Municipality of <strong><TextRandom /></strong></p>      
                        <h6>Municipal Disaster Risk Reduction and Management Office</h6>
                    </Alert>
                    </div>
                    <Footer />
                </div>
        );
    }    
}    

export default About;