import React from 'react'
import './App.css'
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import AdminLogin from './Componets/AdminPage/AdminLogin';
import AdminHome from './Componets/AdminPage/AdminHome';

import FacultyLogin from './Componets/Faculty/FacultyLogin';
import FacultyHome from './Componets/Faculty/FacultyHome';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


const App = () => {
  return (
    <Router >
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/AdminLogin" component={AdminLogin}/>
        <Route exact path="/AdminHome" component={AdminHome}/>
        <Route exact path="/FacultyLogin" component={FacultyLogin} />
        <Route exact path="/FacultyHome" component={FacultyHome} />

      </Switch>
    </Router>
  )
}

export default App
