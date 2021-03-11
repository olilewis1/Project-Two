import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import CardIndex from './components/cards/CardIndex'

function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route exact path="/cards">
          <CardIndex /> 
        </Route>
      </Switch> 
    </BrowserRouter> 
  )
}

export default App
