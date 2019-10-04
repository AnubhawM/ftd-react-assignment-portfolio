import React from 'react'

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'

const Home = props => {
  return (
    <HomeBackground>
      <NavBar />
      <Header>Anubhaw Mathur</Header>
    </HomeBackground>
  )
}

export default Home
