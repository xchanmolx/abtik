import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import CurrentWeather from '../src/containers/Weather/CurrentWeather';

class App extends Component { 
  
  render() {    

    let routes = (
      <Switch>
          <Route path="/weather" component={CurrentWeather} />
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