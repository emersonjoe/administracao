import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/home';
import Login from './containers/login';
import NavBar from './containers/navbar';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={NavBar}/>
      <Route path='/login' component={Login}/>
      <Route path='/home/:id' component={Child}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </main>
)     

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default Main