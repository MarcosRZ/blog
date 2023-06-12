'use client'

import { Variant, getVariant } from "@blog/app/styled/theme";
import styled from "@emotion/styled";

type ButtonProps = { variant?: Variant }

export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 4px;

  padding: ${props => props.theme.gridSize * 2}rem;
  /* background-color: ${props => props.theme.colors[getVariant(props)].dark}; */
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => props.theme.colors[getVariant(props)].light};

  &:hover {
    background-color: ${props => props.theme.colors[getVariant(props)].light};
  }

  transition: all .1s ease;
`