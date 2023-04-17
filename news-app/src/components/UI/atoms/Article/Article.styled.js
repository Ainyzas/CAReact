import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 80%;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: black 0 0 1px 1px;
  padding: 0.5rem;
  text-align: center;
`;

export const StyledHeading = styled.h3`
  font-size: 14px;
`;

export const StyledAnchor = styled.a`
  color: black;
  text-decoration: none;

  :hover {
    opacity: 50%;
  }
`;
