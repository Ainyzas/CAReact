import React from 'react';
import { StyledLink, StyledNavBar } from './Header.styled.js';

export default function Header() {
  return (
    <header>
      <StyledNavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/health">Health</StyledLink>
        <StyledLink to="/science">Science</StyledLink>
        <StyledLink to="/sports">Sports</StyledLink>
      </StyledNavBar>
    </header>
  );
}
