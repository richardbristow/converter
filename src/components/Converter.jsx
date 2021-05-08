import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';

import baseUnits from '../unitConstants/baseUnits';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './Main';

const StyledConverter = styled.div`
  display: grid;
  grid-template-columns: auto 300px 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const Overlay = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  &.overlay-enter {
    opacity: 0;
  }
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

const Converter = () => {
  const [userShowSidebar, setUserShowSidebar] = useState(false);
  const [sidebarDocked, setSidebarDocked] = useState(mql.matches);
  const timeOutId = useRef();
  const sidebar = useRef();

  const mediaQueryChanged = () => {
    setUserShowSidebar(false);
    setSidebarDocked(mql.matches);
  };

  useEffect(() => {
    mql.addListener(mediaQueryChanged);
    return () => mql.removeListener(mediaQueryChanged);
  });

  const onFocusHandler = () => {
    clearTimeout(timeOutId.current);
  };

  const onBlurHandler = () => {
    const id = setTimeout(() => {
      setUserShowSidebar(false);
    });
    timeOutId.current = id;
  };

  const handleHamburgerClick = () => {
    setUserShowSidebar(!userShowSidebar);
  };

  const handeSidebarLinkClick = () => {
    if (userShowSidebar) {
      setUserShowSidebar(false);
    }
  };

  return (
    <StyledConverter onBlur={onBlurHandler} onFocus={onFocusHandler}>
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
        ref={sidebar}
        sidebarDocked={sidebarDocked}
        userShowSidebar={userShowSidebar}
        items={baseUnits}
        handeSidebarLinkClick={handeSidebarLinkClick}
        handleHamburgerClick={handleHamburgerClick}
      />
      <Main baseUnits={baseUnits} sidebarDocked={sidebarDocked} />
    </StyledConverter>
  );
};

export default Converter;
