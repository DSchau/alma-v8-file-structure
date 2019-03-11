import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'
import App from './styled/App'
import Main from './styled/Main'
import Logo from './Logo'
import Shell from './Shell'
import Button from './styled/Button'
import ResponsiveMenu from './ResponsiveMenu.js';
import Div100vh from 'react-div-100vh'

import almaLogoWithBG from '../images/alma-logo-with-bg.svg'
import almaShell from '../images/alma-shell.svg'

const Contact = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;

  @media (min-width: 50rem) {
    grid-column: 1 / 2;
    justify-content: center;
  }
`

const BeeGee = styled.div`
  display: block;
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
  /* box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
              0 5px 15px 0 rgba(0,0,0,0.08); */
  z-index: 1;

  @media (min-width: 50rem) {
    display: block;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    /* background: rgb(0,153,184);
    background: 
      linear-gradient(
        0deg,
        rgba(0,153,184,0.2539390756302521) 0%,
        rgba(255,255,255,1) 100%
      ); */
  }
`

const titleQuery = graphql`
  query MainSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={titleQuery}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Div100vh>
          <App>
            <Logo to={`/`}>
              <img src={almaLogoWithBG} alt="The Alma Resort Logo."  />
            </Logo>
            <ResponsiveMenu changeMenuOn="50rem"/>
            <Shell to={`/`}>
              <img src={almaShell} alt="The Alma Resort Shell."  />
            </Shell>
            <Contact>
              <Button>Join</Button>
            </Contact>
            <Main>
              {children}
            </Main>
            <BeeGee></BeeGee>
          </App>
        </Div100vh>
      </Fragment>
    )}
  />
)

export default Layout
