import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import baseUnits from '../constants/units/baseUnits';
import Header from './navbar/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './Main';

const StyledConverter = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: ${props => (props.userShowSidebar || props.sidebarDocked ? '300px 1fr' : '75px 1fr')};
  grid-template-rows: 50px 1fr;
  height: 100vh;
`;

const mql = window.matchMedia('(min-width: 800px)');

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userShowSidebar: false,
      sidebarDocked: mql.matches,
    };

    this.handleClick = this.handleClick.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
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
          />
          <Main baseUnits={baseUnits} />
        </StyledConverter>
      </Router>
    );
  }
}

export default Converter;
