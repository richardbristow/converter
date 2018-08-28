import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

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

    this.handleClick = this.handleClick.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.handeSidebarLinkClick = this.handeSidebarLinkClick.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  handleClick() {
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
      <Router>
        <StyledConverter sidebarDocked={sidebarDocked} userShowSidebar={userShowSidebar}>
          <Header
            userShowSidebar={userShowSidebar}
            sidebarDocked={sidebarDocked}
            handleClick={this.handleClick}
          />
          <Sidebar
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
    );
  }
}

export default Converter;
