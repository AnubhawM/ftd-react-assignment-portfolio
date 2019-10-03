import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'

const Home = props => {
  return (
    <HomeBackground>
      <React.Fragment>
        <NavBar />
        <Header>Anubhaw Mathur</Header>
      </React.Fragment>
    </HomeBackground>
  )
}

export default Home
