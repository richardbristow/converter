import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import theme from '../theme/globalStyle';
import baseUnits from '../constants/units/baseUnits';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './Main';

const StyledConverter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;

const Overlay = styled.div`
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  &.overlay-enter {
    opacity: 0;
  };
  &.overlay-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.overlay-exit {
    opacity: 1;
  }
  &.overlay-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
`;

const mql = window.matchMedia('(min-width: 1024px)');

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userShowSidebar: false,
      sidebarDocked: mql.matches,
    };

    this.timeOutId = null;
    this.sidebar = React.createRef();
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.handeSidebarLinkClick = this.handeSidebarLinkClick.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        userShowSidebar: false,
      });
    });
  }

  handleHamburgerClick() {
    this.setState(prevState => ({
      userShowSidebar: !prevState.userShowSidebar,
    }));
  }

  handeSidebarLinkClick() {
    const { userShowSidebar } = this.state;
    if (userShowSidebar) {
      this.setState({
        userShowSidebar: false,
      });
    }
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, userShowSidebar: false });
  }

  render() {
    const { userShowSidebar, sidebarDocked } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <StyledConverter
            onBlur={this.onBlurHandler}
            onFocus={this.onFocusHandler}
          >
            <CSSTransition
              in={userShowSidebar}
              classNames="overlay"
              timeout={200}
              unmountOnExit
            >
              <Overlay />
            </CSSTransition>
            <Header sidebarDocked={sidebarDocked} />
            <Sidebar
              ref={this.sidebar}
              sidebarDocked={sidebarDocked}
              userShowSidebar={userShowSidebar}
              items={baseUnits}
              handeSidebarLinkClick={this.handeSidebarLinkClick}
              handleHamburgerClick={this.handleHamburgerClick}
            />
            <Main
              baseUnits={baseUnits}
              sidebarDocked={sidebarDocked}
            />
          </StyledConverter>
        </Router>
      </ThemeProvider>
    );
  }
}

export default Converter;
