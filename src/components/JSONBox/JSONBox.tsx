'use client'

import React from 'react'
import styled from '@emotion/styled'

const JSONBoxComponent = styled.pre`
  white-space: pre-wrap;
  word-break: break-all;
  border: 2px solid red;
  padding: 1rem;
`;

const JSONBox = (props:any) => <JSONBoxComponent>{props.children}</JSONBoxComponent>;

export default JSONBox;