'use client'
import styled from "@emotion/styled";

export const Content = styled.div`
  max-width: min(1024px, 100%);
  margin: auto;
  padding: ${props => props.theme.gridSize * 2}rem;

  p {
    text-align: justify;
  }
`;