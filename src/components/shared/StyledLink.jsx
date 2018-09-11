import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  ${props => props.header && 'padding: 0px 10px 0px 10px'}
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
    span {
      display: block;
    };
  };
  &.active {
    span {
      display: block;
    };
  };
`;

export default StyledLink;
