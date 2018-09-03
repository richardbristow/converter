import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../theme/globalStyle';
import baseUnits from '../constants/units/baseUnits';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './Main';

const StyledConverter = styled.div`
  display: grid;
  grid-template-columns: 75px 225px 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
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

  // componentDidUpdate() {
  //   if (this.state.userShowSidebar) {
  //     this.sidebar.current.focus();
  //   }
  // }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onFocusHandler(e) {
    clearTimeout(this.timeOutId);
    if (e.target.classList.contains('headerLink')) {
      this.setState({
        userShowSidebar: false,
      });
    }
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
            sidebarDocked={sidebarDocked}
            userShowSidebar={userShowSidebar}
          >
            <Header
              userShowSidebar={userShowSidebar}
              sidebarDocked={sidebarDocked}
              handleHamburgerClick={this.handleHamburgerClick}
            />
            <Sidebar
              ref={this.sidebar}
              sidebarDocked={sidebarDocked}
              userShowSidebar={userShowSidebar}
              items={baseUnits}
              handeSidebarLinkClick={this.handeSidebarLinkClick}
            />
            <Main
              baseUnits={baseUnits}
              sidebarDocked={sidebarDocked}
              userShowSidebar={userShowSidebar}
            />
          </StyledConverter>
        </Router>
      </ThemeProvider>
    );
  }
}

export default Converter;
