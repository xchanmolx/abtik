import React, { Component } from 'react';
import { Random } from 'react-animated-text';

import {
    Alert   
} from 'reactstrap';

import classes from './CitizenCharter.module.css';
import Footer from '../Navigation/Footer/Footer'

const TextRandom = () => (
    <Random 
    text="Citizen's Charter"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

class CitizenCharter extends Component {    

    render () {
        return (
                <div className={classes.CitizenCharter}>                      
                    <div className="p-3 bg-info my-2 rounded">
                        <Alert color="secondary" >
                            <h3><TextRandom /></h3>
                        </Alert>
                    </div>
                    <Footer />
                </div>
        );
    }    
}    

export default CitizenCharter;