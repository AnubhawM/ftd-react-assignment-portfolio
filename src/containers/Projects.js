import React from 'react'
import styled from 'styled-components'

import Row from '../components/Row'
import Image from '../components/Image'
import TextBlock from '../components/TextBlock'
import NavBar from '../components/NavBar'

const Projects = props => {
  return (
    <React.Fragment>
      <NavBar />

      <Row justifyContent='space-around'>
        <TextBlock>This is where my Projects will go!</TextBlock>
      </Row>
    </React.Fragment>
  )
}

export default Projects
