import styled from 'styled-components';

const StyledConvertButton = styled.button`
  padding-left: 15px;
  text-align: left;
  background-color: ${props => (props.selected ? 'palegreen' : 'whitesmoke')};;
  border: 0;
  outline: none;
  /* &:focus {
    background-color: paleturquoise;
  }; */
  &:hover {
    background-color: ${props => (!props.header && 'paleturquoise')};
  };
`;

export default StyledConvertButton;
