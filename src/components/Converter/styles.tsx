"use client"

import { styled } from "styled-components";

export const ConverterContainer = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 16px 32px;
  
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: var(--shadow);

  @media (min-width: 600px) {
    width: 70%;
  }
  
  @media (min-width: 992px) {
    width: 50%;
  }
  
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-weight: 600;

  :nth-child(2) {
    width: 10%;
  }
`;

export const ArrowIcon = () => {
  return (
    <svg width="146" height="53" viewBox="0 0 146 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Arrow 1" d="M144.473 29.2158C145.84 27.849 145.84 25.6329 144.473 24.2661L122.199 1.99223C120.832 0.625395 118.616 0.625395 117.249 1.99223C115.882 3.35906 115.882 5.57514 117.249 6.94198L137.048 26.741L117.249 46.54C115.882 47.9068 115.882 50.1229 117.249 51.4897C118.616 52.8565 120.832 52.8565 122.199 51.4897L144.473 29.2158ZM0.997803 30.241H141.998V23.241H0.997803V30.241Z" fill="#1A1A1A" />
    </svg>
  );
};

export const CurrencySelector = styled.select`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: var(--shadow);

  font-size: var(--fz-subtitle-sm);
  padding: 2px;
  
  &:hover {
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    background-color: #EFEFEF;
  }

  @media (min-width: 992px) {
    font-size: var(--fz-subtitle);
  }
`;

export const Input = styled.input`
  outline: none;
  caret-color: var(--secondary-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: var(--shadow);

  font-size: var(--fz-subtitle-sm);
  padding: 5px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    background-color: #EFEFEF;
  }

  @media (min-width: 992px) {
    font-size: var(--fz-subtitle);
  }
`;

export const BtnConvert = styled.button`
  cursor: pointer;

  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: var(--shadow);
  width: fit-content;

  font-size: var(--fz-subtitle-sm);
  color: #EFEFEF;
  padding: 6px 12px;
  background-color: hsl(100, 86%, 34%);
  
  &:hover {
    color: #EFEFEFDD;
    background-color: hsl(100, 86%, 34%, 0.8);
  }

  &:active,
  &:disabled {
    color: #EFEFEFDD;
    background-color: hsl(100, 43%, 80%, 0.8);
    box-shadow: inset var(--shadow);
  }

  @media (min-width: 992px) {
    font-size: var(--fz-subtitle);
  }
`;

export const ValueConverted = styled.h2`
  font-size: var(--fz-title-sm);

  @media (min-width: 992px) {
    font-size: var(--fz-title);
  }
`;
