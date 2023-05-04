import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 10%;
  margin: 5rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: #18122b;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: #443c68 0 0 2px 2px;
  background-color: #635985;

  h2 {
    text-align: center;
  }

  button {
    align-self: center;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    color: gainsboro;
    background-color: #18122b;
    border: 1px solid transparent;
    border-radius: 10px;

    :hover {
      cursor: pointer;
    }
  }
`;
