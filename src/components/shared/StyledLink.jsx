import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${props => (props.header ? '0px 20px 0px 0px' : '0px 0px 0px 40px')};
  align-items: center;
  display: flex;
  color: black;
  &:hover {
    text-decoration: none;
    background-color: lightgrey;
  };
  &:visited {
    color: black;
  };
  &:focus {
    background-color: lightgrey;
  };
  height: 100%;
`;

export default StyledLink;
