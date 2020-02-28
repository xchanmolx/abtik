import React from 'react';
import {
    Button
} from 'reactstrap';

import classes from './COVID19.module.css';

const COVID19 = (props) => {

    return (
        <div className={classes.COVID19} >
            <a type="button" href="https://www.facebook.com/OfficialDOHgov/" target="_blank" class="button"><Button color="primary">COVID-19</Button></a>
        </div>
    );
}

export default COVID19;