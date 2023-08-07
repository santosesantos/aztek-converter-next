import { styled } from "styled-components";

export const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 16px 32px;
  
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.main};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Title = styled.div`
  h2 {
    display: flex;
    gap: 1rem;
    font-weight: 800;
  }
`;

export const CurrencySelector = styled.select`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.main};

  font-size: 1.3rem;
  padding: 2px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    background-color: #EFEFEF;
  }
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.main};

  font-size: 1.3rem;
  padding: 5px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    background-color: #EFEFEF;
  }
`;

export const BtnConvert = styled.button`
  cursor: pointer;

  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.main};
  width: fit-content;

  font-size: 1.2rem;
  color: #EFEFEF;
  padding: 5px 10px;
  background-color: rgba(53, 150, 75, 1);
  
  &:hover {
    color: #EFEFEFDD;
    background-color: rgba(53, 150, 75, 0.7);
  }

  &:active {
    color: rgba(53, 150, 75, 0.5);
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: inset ${props => props.theme.shadows.main};
  }
`;

export const ValueConverted = styled.h2`
  font-size: 1.6rem;
`;