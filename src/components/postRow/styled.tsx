'use client'

import { styled } from "styled-components";

export const PostRowWrapper = styled.div`
  border: 2px solid #35c495;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;


export const PostRowHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-top: 0;
  }
`;

export const PostControls = styled.div`
  display: flex;
  gap: .25rem;
  align-items: start;
`