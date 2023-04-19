import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    opacity: 50%;
  }
`;
