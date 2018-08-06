import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${props => (props.header ? '0px 10px 0px 10px' : '0px 0px 0px 40px')};
  align-items: center;
  display: flex;
  color: black;
  &:hover {
    text-decoration: none;
    background-color: ${props => (!props.header && 'lightgrey')};
    span {
      display: block;
      padding-right: 10px;
      padding-left: 5px;
    }
  };
  &:visited {
    color: black;
  };
  /* &:focus {
    background-color: lightgrey;
  }; */
  span {
    display: none;
  }
`;

export default StyledLink;
