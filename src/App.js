import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <>
    <Router>
      <Topbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
