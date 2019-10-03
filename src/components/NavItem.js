import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavItem = styled(NavLink)`
  font-size: 20pt;
  text-decoration: none;
  color: pink;
  padding: 10px;

  $.active {
    color: blue;
  }
`

export default NavItem
