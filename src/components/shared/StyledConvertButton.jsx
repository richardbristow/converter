import styled from 'styled-components/macro';

const StyledConvertButton = styled.button`
  padding-left: 15px;
  text-align: left;
  background-color: ${({ selected, theme }) =>
    selected ? `${theme.selectedBackground}` : 'whitesmoke'};
  border-top: 0px;
  border-bottom: ${({ header }) => (header ? '1px solid black' : '0px')};
  border-left: ${({ header }) => (header ? '1px solid black' : '0px')};
  border-right: 0px;
  border-radius: ${({ header }) => header && '0px 0px 0px 4px'};
  outline: none;
  min-width: 0;
  overflow: hidden;
  &:focus {
    background-color: ${({ arrow, selected }) =>
      !arrow && !selected && 'lightgrey'};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledConvertButton;
