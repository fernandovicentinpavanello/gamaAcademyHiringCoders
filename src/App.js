import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Clients from './pages/Clients';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/clients' exact component={ Clients } />
        <Route path='/products' exact component={ Products } />
        <Route path='/sign-up' exact component={ SignUp } />
      </Switch>
    </Router> 
    </>
  );
}

export default App;
