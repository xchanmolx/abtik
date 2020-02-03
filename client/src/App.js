import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CurrentWeather from '../src/containers/Weather/CurrentWeather';
import Preparedness from './components/Preparedness/Preparedness';
import Hazard from './components/Hazard/Hazard';
import Activity from './components/Activity/Activity';
import CitizenCharter from './components/CitizenCharter/CitizenCharter';

class App extends Component { 
  
  render() {    

    let routes = (
      <Switch>
          <Route path="/weather" component={CurrentWeather} />
          <Route path="/preparedness" component={Preparedness} />
          <Route path="/hazard" component={Hazard} />
          <Route path="/activity" component={Activity} />
          <Route path="/citizen" component={CitizenCharter} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />            
      </Switch>  
    );  

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }  
}

export default App;