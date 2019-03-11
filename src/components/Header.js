import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Logo = styled.div`
  height: 10vh;

  @media (min-width: 50rem) {
    grid-row: 1;
    grid-column: 1;
    background: 'deepskyblue';
  }
`

const H1 = styled.h1`
  font-size: 16px;
`

const Header = ({ siteTitle }) => (
  <Logo>
    <Link to="/">{siteTitle}</Link>
  </Logo>
)

export default Header
