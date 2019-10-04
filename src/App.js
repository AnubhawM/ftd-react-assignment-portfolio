import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Resume from './containers/Resume'
import Projects from './containers/Projects'


const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/projects' exact component={Projects} />

      <Redirect to='/' />
    </Switch>
  )
}

export default App
