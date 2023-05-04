import styled from 'styled-components';

export const StyledQuestionCardDiv = styled.div`
  width: 35%;
  margin: 5rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #18122b;
  border: 1px solid transparent;
  border-radius: 15px;
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

export const StyledAnswerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    padding-top: 1rem;

    input {
      width: 16px;
      height: 16px;
      position: relative;
      border-radius: 50%;
      appearance: none;
      border: 2px solid #443c68;

      :hover {
        cursor: pointer;
      }

      :checked {
        background-color: #18122b;
      }
    }

    span {
      padding-left: 0.5rem;
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
