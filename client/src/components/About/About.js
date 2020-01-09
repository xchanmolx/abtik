import React, { Component } from 'react';
import { Random } from 'react-animated-text';

import {
    Alert   
} from 'reactstrap';

import classes from './About.module.css';
import cssLogo from '../Logo/css-logo.module.css';
import AbtikLogo from '../Logo/Abtik-logo';
import AlogLogo from '../Logo/Abtik-logo';
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
                    <Alert color="secondary" >
                        <div className={cssLogo.LogoAlog}>
                        <AlogLogo />
                        </div>
                        <div className={cssLogo.LogoAbtik}>
                        <AbtikLogo />
                        </div>
                        <p>Republic of the Philippines<br />
                        Province of Cebu<br />
                        Municipality of <strong><TextRandom /></strong></p>      
                        <h6>Municipal Disaster Risk Reduction and Management Office</h6>
                        <br />
                        <div style={{textAlign: 'left'}}>
                        <p>&emsp;&emsp; Aloguinsan is a 4th class municipality located in the mid-western part of the Province of Cebu. 
                            It is composed of 15 barangays, 4 of which are coastal. Aloguinsan's population is about 
                            32,000, and the major sources of livelihood are fishing and farming. It is also considered
                            the "Ecotourism Capital of Cebu," it is the site of the internationally-awarded Bojo River
                            Eco-cultural tour.</p>
                        <p>&emsp;&emsp; The major hazard of the municipality includes flooding and landslide based on the available
                            hazard maps. Other prevalent incidents noted in the municipality are vehicular and traffic
                            related accidents.
                        </p>
                        <p>
                        &emsp;&emsp; The official website developed by the Local Government Unit thru the Municipal
                            Disaster Risk Reduction and Management Office is an avenue for:
                        </p>
                        </div>
                        <ul style={{textAlign: 'left'}}>
                            <li>Updates on the latest issues and trends on DRR and CCA</li>
                            <li>Announcements and advisories</li>
                            <li>Preparedness measures</li>
                            <li>Latest weather bulletin</li>
                            <li>Projects, Programs and Activities of the Aloguinsan DRRM Office</li>
                            <li>Directory of emergency numbers</li>
                        </ul>
                    </Alert>
                    </div>
                    <Footer />
                </div>
        );
    }    
}    

export default About;