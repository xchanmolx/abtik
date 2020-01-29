import React from 'react';
import { Alert } from 'reactstrap';

import classes from './PPAimages.module.css';
import casesImage from '../../assets/images/cases-2019.jpg';
import sinulogImg1 from '../../assets/images/sinulog1.jpg';
import sinulogImg2 from '../../assets/images/sinulog2.jpg';
import sinulogImg3 from '../../assets/images/sinulog3.jpg';
import sinulogImg4 from '../../assets/images/sinulog4.jpg';
import sinulogImg5 from '../../assets/images/sinulog5.jpg';
import sinulogImg6 from '../../assets/images/sinulog6.jpg';
import sinulogImg7 from '../../assets/images/sinulog7.jpg';

const PPAimages = (props) => (
    <div className={classes.PPAimages} style={{height: props.height}}>
        <Alert color="warning">
            Sinulog 2020 Responders
        </Alert>
        <img src={sinulogImg1} alt="sinulog 2020" />
        <img src={sinulogImg2} alt="sinulog 2020" />
        <img src={sinulogImg3} alt="sinulog 2020" />
        <img src={sinulogImg4} alt="sinulog 2020" />
        <img src={sinulogImg5} alt="sinulog 2020" />
        <img src={sinulogImg6} alt="sinulog 2020" />
        <img src={sinulogImg7} alt="sinulog 2020" />
        <img src={casesImage} alt="abtik 2019 cases" />
    </div>
);

export default PPAimages;