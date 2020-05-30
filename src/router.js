import React from 'react';
// import { Route,BrowserRouter } from 'react-router-dom';
import { Router,Route } from 'react-router';
import browserHistory from 'react-router/lib/browserHistory';

import Home from './Home.js'
import custom_slider from './customslider.js'

export const App = (props) => (
    <Router {...props} history={browserHistory} >
      <Route path="/" component={Home} />
      <Route path="/custom_slider" component={custom_slider} />
    </Router>
)