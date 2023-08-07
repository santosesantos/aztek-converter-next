// import React, { useState } from 'react';
// import * as C from "./styles";

// const Converter = () => {
//   const [currencyA, setCurrencyA] = useState("USD");
//   const [valueCurrencyA, setValueCurrencyA] = useState('');
//   const [currencyB, setCurrencyB] = useState("BRL");
//   const [valueCurrencyB, setValueCurrencyB] = useState(0);
//   const [currencySymbol, setCurrencySymbol] = useState('R$');

//   const convert = async () => {
//     if (valueCurrencyA !== 0 && valueCurrencyA !== '' && valueCurrencyA > 0) {
//       const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.REACT_APP_FREE_CURRENCY_KEY}&base_currency=${currencyA}&currencies=${currencyB}`;
//       await fetch(url)
//         .then(res => {
//           return res.json();
//         })
//         .then(jsonResponse => {
//           let price = jsonResponse.data[currencyB];
//           setValueCurrencyB((parseFloat(valueCurrencyA) * price).toFixed(2));
//         });
//     }
//   }

//   const verifyZero = txt => {
//     if (txt.startsWith('0')) {
//       return verifyZero(txt.slice(1));
//     }

//     return txt;
//   }

//   const updateField = evt => {
//     const txt = verifyZero(evt.target.value);
//     (txt.length <= 14) && (txt >= 0) && setValueCurrencyA(txt);
//   }

//   const updateCurrency = (evt) => {
//     if (evt.target.name === "currencyA") {
//       setCurrencyA(evt.target.value);
//       return;
//     }
//     if (evt.target.name === "currencyB") {
//       const currency = evt.target.value.split(';');
//       setCurrencyB(currency[0]);
//       setCurrencySymbol(currency[1] || '$');
//       return;
//     }
//   }

//   return (
//     <C.ConverterContainer>
//       <C.Title>
//         <h2>
//           <C.CurrencySelector name="currencyA" onChange={evt => updateCurrency(evt)}>
//             <option value="USD">USD</option>
//             <option value="BRL">BRL</option>
//             <option value="AUD">AUD</option>
//             <option value="BGN">BGN</option>
//             <option value="CAD">CAD</option>
//             <option value="CHF">CHF</option>
//             <option value="CNY">CNY</option>
//             <option value="CZK">CZK</option>
//             <option value="DKK">DKK</option>
//             <option value="EUR">EUR</option>
//             <option value="GBP">GBP</option>
//             <option value="HKD">HKD</option>
//             <option value="HUF">HUF</option>
//             <option value="IDR">IDR</option>
//             <option value="ILS">ILS</option>
//             <option value="INR">INR</option>
//             <option value="ISK">ISK</option>
//             <option value="JPY">JPY</option>
//             <option value="KRW">KRW</option>
//             <option value="MXN">MXN</option>
//             <option value="MYR">MYR</option>
//             <option value="NOK">NOK</option>
//             <option value="NZD">NZD</option>
//             <option value="PHP">PHP</option>
//             <option value="PLN">PLN</option>
//             <option value="RON">RON</option>
//             <option value="RUB">RUB</option>
//             <option value="SEK">SEK</option>
//             <option value="SGD">SGD</option>
//             <option value="THB">THB</option>
//             <option value="TRY">TRY</option>
//             <option value="ZAR">ZAR</option>
//           </C.CurrencySelector> &rArr; <C.CurrencySelector name="currencyB" onChange={evt => updateCurrency(evt)}>
//             <option value="BRL;R$">BRL</option>
//             <option value="USD;$">USD</option>
//             <option value="AUD;$">AUD</option>
//             <option value="BGN;Лв">BGN</option>
//             <option value="CAD;$">CAD</option>
//             <option value="CHF;₣">CHF</option>
//             <option value="CNY;¥">CNY</option>
//             <option value="CZK;Kč">CZK</option>
//             <option value="DKK;kr.">DKK</option>
//             <option value="EUR;€">EUR</option>
//             <option value="GBP;£">GBP</option>
//             <option value="HKD;HK$">HKD</option>
//             <option value="HUF;Ft">HUF</option>
//             <option value="IDR;Rp">IDR</option>
//             <option value="ILS;₪">ILS</option>
//             <option value="INR;₹">INR</option>
//             <option value="ISK;kr">ISK</option>
//             <option value="JPY;¥">JPY</option>
//             <option value="KRW;₩">KRW</option>
//             <option value="MXN;$">MXN</option>
//             <option value="MYR;RM">MYR</option>
//             <option value="NOK;kr">NOK</option>
//             <option value="NZD;$">NZD</option>
//             <option value="PHP;₱">PHP</option>
//             <option value="PLN;zł">PLN</option>
//             <option value="RON;lei">RON</option>
//             <option value="RUB;₽">RUB</option>
//             <option value="SEK;kr">SEK</option>
//             <option value="SGD;$">SGD</option>
//             <option value="THB;฿">THB</option>
//             <option value="TRY;TL">TRY</option>
//             <option value="ZAR;R">ZAR</option>
//           </C.CurrencySelector>
//         </h2>
//       </C.Title>
//       <form action="javascript:void(0)">
//         <C.Input type="number" value={valueCurrencyA} placeholder="Enter value..." onChange={evt => updateField(evt)} autoFocus required />
//         <C.BtnConvert type="submit" onClick={convert}>Convert</C.BtnConvert>
//       </form>
//       <C.ValueConverted>{currencySymbol} {valueCurrencyB}</C.ValueConverted>
//     </C.ConverterContainer>
//   );
// }

// export default Converter;