import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import Header from './components/Header/Header';

import Dashboard from './containers/Dashboard/Dashboard';
import Instances from './containers/Instances/Instances';
import Pairs from './containers/Pairs/Pairs';
import About from './containers/About/About';
import Help from './containers/Help/Help';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/instances" component={Instances} />
        <Route path="/pairs" component={Pairs} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
