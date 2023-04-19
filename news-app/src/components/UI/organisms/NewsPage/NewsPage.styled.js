import styled from 'styled-components';

export const StyledPageDiv = styled.div`
  width: 90%;
  margin: 2rem auto;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const StyledButtonDiv = styled.div`
  text-align: center;
  width: 90%;
  margin: 1rem auto;
`;

export const StyledButton = styled.button`
  background-color: gainsboro;
  border: 1px solid black;
  padding: 0.25rem 2rem;
  margin: 0 1rem;

  :hover {
    cursor: pointer;
    opacity: 75%;
  }
`;
