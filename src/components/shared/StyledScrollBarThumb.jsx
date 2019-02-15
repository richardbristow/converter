import styled from 'styled-components/macro';


const StyledScrollBarThumb = styled.div`
  border-radius: 3px;
  width: 5px;
  background-color: ${({ theme }) => theme.scrollbarTrack};
  &:hover {
    background-color: ${({ theme }) => theme.scrollbarThumb};
  }
`;

export default StyledScrollBarThumb;
