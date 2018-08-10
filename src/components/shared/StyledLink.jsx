import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: ${props => (props.header ? '0px 10px 0px 10px' : '0px 0px 0px 25px')};
  align-items: center;
  display: flex;
  color: black;
  span {
    display: none;
    padding-right: 10px;
    padding-left: 5px;
  }
  &:visited {
    color: black;
  };
  &:hover {
    text-decoration: none;
    background-color: ${props => (!props.header && 'lightgrey')};
    span {
      display: block;
    }
  };
  &.active {
    font-weight: bold;
    span {
      display: block;
    }
  }
  /* &:focus {
    background-color: lightgrey;
  }; */
`;

export default StyledLink;
