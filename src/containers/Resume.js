import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavItem from '../components/NavItem'
import NavBar from '../components/NavBar'

const Resume = props => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <NavItem to='https://www.slideshare.net/slideshow/embed_code/key/f5IkxRImhDxP9g'>
          My Resume
        </NavItem>
      </div>
    </React.Fragment>
  )
}

export default Resume
