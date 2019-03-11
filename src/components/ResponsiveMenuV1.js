import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button'

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
`;

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

const MenuIcon = ({ onClick }) => (
  <div role="button" onClick={onClick}>
    <Button>Menu</Button>
  </div>
);

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const {
      menu,
      // largeMenuClassName,
      // smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton
    } = this.props;
    return (
      <>
        <LargeMenu
          // className={largeMenuClassName}
          size={changeMenuOn}
        >
          {menu}
        </LargeMenu>
        <SmallMenu
          // className={smallMenuClassName}
          size={changeMenuOn}
        >
          {!this.state.showMenu ?
            (
              <MenuIcon
                onClick={this.handleClick}
                icon={menuOpenButton}
              />
            ) : (
              <MenuIcon
                onClick={this.handleClick}
                icon={menuCloseButton}
              />
            )
          }
          {this.state.showMenu ? <MobileMenu>{menu}</MobileMenu> : null}
        </SmallMenu>
      </>
    );
  }
}

ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  // largeMenuClassName: PropTypes.string,
  // smallMenuClassName: PropTypes.string,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired
};

// ResponsiveMenu.defaultProps = {
//   largeMenuClassName: '',
//   smallMenuClassName: ''
// };

export default ResponsiveMenu;