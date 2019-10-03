import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavItem from '../components/NavItem'

const Resume = props => {
  return (
    <div>
      <NavItem to='https://www.slideshare.net/slideshow/embed_code/key/f5IkxRImhDxP9g'>
        My Resume
      </NavItem>
    </div>
  )
}

export default Resume
