"use client"

import { styled } from "styled-components";

export const Footer = styled.div`
  background-color: var(--white);
  width: 100vw;
  padding: 5px 8px;

  display: flex;
  justify-content: flex-end;

  font-size: 12px;
  
  @media (min-width: 600px) {
    font-size: 14px;
  }
`