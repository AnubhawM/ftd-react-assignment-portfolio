import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-color: black;
`

const NavBar = props => {
  return (
    <StyledNavBar>
      <div>
        <NavItem to='/' exact>
          Home
        </NavItem>
      </div>
      <div>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/resume'>Resume</NavItem>
      </div>
    </StyledNavBar>
  )
}

export default NavBar
