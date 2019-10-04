import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavItem from '../components/NavItem'
import NavBar from '../components/NavBar'

const Resume = props => {
  const resumeClick = () => {
    window.location =
      'https://www.slideshare.net/slideshow/embed_code/key/f5IkxRImhDxP9g'
  }
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <button onClick={resumeClick}>My Resume</button>
      </div>
    </React.Fragment>
  )
}

export default Resume
