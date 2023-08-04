import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Navbar from './core/Navbar'; 
// import Products from './Products';
// import About from './About';
// import Contact from './Contact';

const Routes = () => {
  return (
    <BrowserRouter>
    <div><Navbar /> 
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
      </div>
    </BrowserRouter>
    
  );
};

export default Routes;
