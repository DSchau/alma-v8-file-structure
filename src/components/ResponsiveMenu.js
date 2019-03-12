import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './styled/Button'

const SmallMenu = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 10px;
  z-index: 10;

  @media (min-width: ${props => props.size}) {
    display: none;
  }
`

const LargeMenu = styled.div`
  display: none;

  @media (min-width: ${props => props.size}) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 60vh;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  bottom: 13vh;
  left: 5vw;
  height: 256px;
  width: 90vw;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);
`

const SLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  line-height: 1;
  color: #2d658e;
  font-size: 16px;

  :focus {
    background: hsla(207, 55%, 69%, 0.2);
    border-radius: 32px;
  }

  @media (min-width: 50rem) {
    font-size: 20px;
  }
`

// const MenuIcon = ({ onClick }) => (
//   <div role="button" onClick={onClick}>
//     {/* <Button>Menu</Button> */}
//   </div>
// );

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }
  }

  // handleClick = () => {
  //   this.setState({ showMenu: !this.state.showMenu });
  // };

  handleClick = () => {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu }
    })
  }

  render() {
    const { changeMenuOn, location } = this.props

    const [locale] = location.pathname.split('/').slice(1)

    return (
      <>
        <LargeMenu size={changeMenuOn}>
          <SLink to={`/${locale}/resort`}>The Resort</SLink>
          <SLink to={`/${locale}/rooms`}>The Rooms</SLink>
          <SLink to={`/${locale}/amenities`}>The Amenities</SLink>
          <SLink to={`/${locale}/news`}>Latest News</SLink>
          <SLink to={`/${locale}/about`}>About Alma</SLink>
        </LargeMenu>
        <SmallMenu size={changeMenuOn}>
          {!this.state.showMenu ? (
            <Button onClick={this.handleClick}>Menu</Button>
          ) : (
            <Button onClick={this.handleClick}>Close</Button>
          )}
          {this.state.showMenu ? (
            <MobileMenu>
              <SLink to={`/${locale}/resort`} onClick={this.handleClick}>
                The Resort
              </SLink>
              <SLink to={`/${locale}/rooms`} onClick={this.handleClick}>
                The Rooms
              </SLink>
              <SLink to={`/${locale}/amenities`} onClick={this.handleClick}>
                The Amenities
              </SLink>
              <SLink to={`/${locale}/news`} onClick={this.handleClick}>
                Latest News
              </SLink>
              <SLink to={`/${locale}/about`} onClick={this.handleClick}>
                About Alma
              </SLink>
            </MobileMenu>
          ) : null}
        </SmallMenu>
      </>
    )
  }
}

ResponsiveMenu.propTypes = {
  changeMenuOn: PropTypes.string.isRequired,
}

export default ResponsiveMenu
