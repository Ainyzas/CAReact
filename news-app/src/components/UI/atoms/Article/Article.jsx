import React from 'react';
import { StyledAnchor, StyledDiv, StyledHeading } from './Article.styled';

export default function Article({ title, author, url }) {
  return (
    <StyledDiv>
      <StyledHeading>{title}</StyledHeading>
      <StyledAnchor href={url}>
        <b>Source:</b> {author}
      </StyledAnchor>
    </StyledDiv>
  );
}
