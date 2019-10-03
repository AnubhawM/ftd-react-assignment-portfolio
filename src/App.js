import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Resume from './containers/Resume'

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/https://www.slideshare.net/slideshow/embed_code/key/f5IkxRImhDxP9g'>
        <a href='https://www.slideshare.net/slideshow/embed_code/key/f5IkxRImhDxP9g' />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default App