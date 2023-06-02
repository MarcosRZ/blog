import styled from '@emotion/styled';

export default styled.input`
  padding: 0.5rem;
  border: 2px solid orangered;
  border: 2px solid #36dfa7;
  background: none;
  border-radius: 5px;
  color: white;
  -webkit-appearance: none;

  &:hover {
    border: 2px solid #70ffcf;
  }

  &:focus{
    outline: none;
    outline-color: transparent;
    border: 2px solid aquamarine;
  }
`;