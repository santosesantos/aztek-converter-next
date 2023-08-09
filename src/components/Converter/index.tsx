"use client";

import React, { useState } from 'react';
import Select, { SingleValue } from "react-select";
import * as C from "./styles";

interface IProps {
  children?: React.ReactNode;
}

export default function Converter(props: IProps) {
  const options = [
    {value: "USD;$", label: "USD"},
    {value: "BRL;R$", label: "BRL"},
    {value: "AUD;$", label: "AUD"},
    {value: "BGN;Лв", label: "BGN"},
    {value: "CAD;$", label: "CAD"},
    {value: "CHF;₣", label: "CHF"},
    {value: "CNY;¥", label: "CNY"},
    {value: "CZK;Kč", label: "CZK"},
    {value: "DKK;kr.", label: "DKK"},
    {value: "EUR;€", label: "EUR"},
    {value: "GBP;£", label: "GBP"},
    {value: "HKD;HK$", label: "HKD"},
    {value: "HUF;Ft", label: "HUF"},
    {value: "IDR;Rp", label: "IDR"},
    {value: "ILS;₪", label: "ILS"},
    {value: "INR;₹", label: "INR"},
    {value: "ISK;kr", label: "ISK"},
    {value: "JPY;¥", label: "JPY"},
    {value: "KRW;₩", label: "KRW"},
    {value: "MXN;$", label: "MXN"},
    {value: "MYR;RM", label: "MYR"},
    {value: "NOK;kr", label: "NOK"},
    {value: "NZD;$", label: "NZD"},
    {value: "PHP;₱", label: "PHP"},
    {value: "PLN;zł", label: "PLN"},
    {value: "RON;lei", label: "RON"},
    {value: "RUB;₽", label: "RUB"},
    {value: "SEK;kr", label: "SEK"},
    {value: "SGD;$", label: "SGD"},
    {value: "THB;฿", label: "THB"},
    {value: "TRY;TL", label: "TRY"},
    {value: "ZAR;R", label: "ZAR"},
  ]

  const [currencyA, setCurrencyA] = useState("USD");
  const [valueCurrencyA, setValueCurrencyA] = useState<number>();

  const [currencyB, setCurrencyB] = useState("BRL");
  const [valueCurrencyB, setValueCurrencyB] = useState<string>("");
  const [currencySymbol, setCurrencySymbol] = useState('R$');

  const [isDisabled, setIsDisabled] = useState(true);

  async function convert() {
    if (valueCurrencyA && valueCurrencyA !== 0 && valueCurrencyA > 0) {
      const url = `https://aztek-backend.vercel.app/api?currencyA=${currencyA}&currencyB=${currencyB}`;
      await fetch(url)
        .then(res => {
          return res.json();
        })
        .then(jsonResponse => {
          let price = jsonResponse.data[currencyB];
          setValueCurrencyB((valueCurrencyA * price).toFixed(2));
        })
        .catch(exception => {
          console.log(exception);
          window.alert("An error has occurred. Please, try again.");
        });
    } else {
      window.alert("Please, enter a value!");
    }
  }

  function verifyZero(txt: string) {
    if (txt.startsWith('0')) {
      return verifyZero(txt.slice(1));
    }
    return txt;
  }

  function updateField(evt: React.ChangeEvent<HTMLInputElement>) {
    const txt = verifyZero(evt.target.value);

    if (txt.length <= 14) {
      const value = parseInt(txt);
      setValueCurrencyA(value);
      setIsDisabled(false);

      if (!txt.length)
        setIsDisabled(true);
    }
  }

  function updateCurrency(evt: SingleValue<{ value: string; label: string}>, name: string) {
    if (!evt)
      return;

    setValueCurrencyB("");
    if (name === "currencyA") {
      const currency = evt.value.split(';');
      setCurrencyA(currency[0]);
      return;
    }

    if (name === "currencyB") {
      const currency = evt.value.split(';');
      setCurrencyB(currency[0]);
      setCurrencySymbol(currency[1] || '$');
      return;
    }
  }

  return (
    <C.ConverterContainer>
      <C.Title>
        <Select options={options} 
          defaultValue={{value: currencyA + ";$", label: currencyA}} 
          onChange={evt => updateCurrency(evt, "currencyA")}
        />
        <C.ArrowIcon />
        <Select options={options} 
          defaultValue={{value: currencyB + ";R$", label: currencyB}} 
          onChange={evt => updateCurrency(evt, "currencyB")}
        />
      </C.Title>
      <C.Input type="number" inputMode="numeric" value={valueCurrencyA} placeholder="Enter value..." onChange={updateField} autoFocus />
      <C.BtnConvert disabled={isDisabled} onClick={convert}>Convert</C.BtnConvert>
      <C.ValueConverted>{currencySymbol} {valueCurrencyB}</C.ValueConverted>
    </C.ConverterContainer>
  );
}