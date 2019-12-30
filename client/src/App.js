import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CurrentWeather from '../src/containers/Weather/CurrentWeather';
import Responder from './containers/Responder/Responder';

class App extends Component { 
  
  render() {    

    let routes = (
      <Switch>
          <Route path="/weather" component={CurrentWeather} />
          <Route path="/responder" component={Responder} />
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