

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'; 
import Contact from './Contact.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Apps from './Apps.jsx';


ReactDOM.render((
   <Router>
      <div>         
         <Route exact path = "/" component = {Apps} />
         <Route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
      </div>
   </Router>
	
), document.getElementById('app'))