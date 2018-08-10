import styled from 'styled-components';

const StyledConvertButton = styled.button`
  padding-left: 15px;
  text-align: left;
  background-color: ${props => (props.selected ? 'palegreen' : 'whitesmoke')};;
  border-top: 0px;
  border-bottom: ${props => (props.header ? '1px solid black' : '0px')};
  border-left: ${props => (props.header && '1px solid black')};
  border-right: 0px;
  border-radius: ${props => (props.header && '0px 0px 0px 4px')};
  outline: none;
  min-width: 0;
  overflow: hidden;
  &:focus {
    background-color: ${props => (!props.arrow && !props.selected && 'paleturquoise')};
  };
`;

export default StyledConvertButton;
