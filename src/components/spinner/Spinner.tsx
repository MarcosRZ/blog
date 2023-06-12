'use client'
import React from "react";
import styled, { keyframes } from "styled-components";

// Definir la animación del spinner
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilos del spinner
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerComponent = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #0f3a2b;
  border-top: 4px solid #35c495;
  border-bottom: 4px solid #35c495;
  border-radius: 50%;
  box-shadow: 0px 0px 5px #35c495;
  animation: ${spinAnimation} 1s linear infinite;
`;

const SpinnerWrapper = styled.div`
  gap: 1rem;
  color: #35c495;
  display: flex;
  flex-direction: column;
`;

const SpinnerText = styled.div`
  text-align: center;
`;

// Componente Spinner
const Spinner = () => <>
    <SpinnerWrapper>      
      <SpinnerContainer>
        <SpinnerComponent />
      </SpinnerContainer>
      <SpinnerText>Loading...</SpinnerText>
    </SpinnerWrapper>
  </>

export default Spinner;