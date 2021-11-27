import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loader from "./Loader";
import Error from "./Error";
import CurrencyRow from "./CurrencyRow";

// convert currency
const getConvertedValue = (
  rates: any,
  from: string,
  to: string,
  amount: number
) => {
  if (rates) {
    return parseFloat(((amount * rates[to]) / rates[from]).toFixed(2));
  }
  return NaN;
};

export default function Main() {
  const [rates, setRates] = useState<any>([]);
  const [dataError, setDataError] = useState<boolean>(false);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("CAD");
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [toAmount, setToAmount] = useState<number>(1);

  // data api call
  const { isLoading, data, error } = useQuery("repoData", () =>
    fetch(
      `${process.env.REACT_APP_URL}/latest?access_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json())
  );

  useEffect(() => {
    if (data && data.rates) {
      console.log("data1", data);
      setRates(data.rates);
      setCurrencyOptions([...Object.keys(data.rates)]);
      // fromAmountChange(1);
      setToAmount(getConvertedValue(data.rates, fromCurrency, toCurrency, 1));
      setDataError(false);
    } else {
      setDataError(true);
    }
  }, [data]);

  console.log("data", fromCurrency);

  if (isLoading) return <Loader />;

  if (error || dataError)
    return <Error message={`An error has occurred: Please try again later!`} />;

  const fromAmountChange = (frmAmount: number) => {
    // frmAmount * rates[fromCurrency] = toAmount * toRate;
    console.log(
      fromCurrency,
      rates[fromCurrency],
      frmAmount,
      toCurrency,
      rates[toCurrency],
      toAmount
    );

    // const tAmount = convertAmount()
    const tAmount = getConvertedValue(
      rates,
      fromCurrency,
      toCurrency,
      frmAmount
    );
    // (frmAmount * parseFloat(rates[toCurrency])) /
    // parseFloat(rates[fromCurrency]);
    setFromAmount(frmAmount);
    setToAmount(tAmount);
  };
  const fromCurrencyChange = (fromCurrency: string) => {
    // frmAmount * rates[fromCurrency] = toAmount * toRate;
    console.log(
      fromCurrency,
      rates[fromCurrency],
      toCurrency,
      rates[toCurrency],
      toAmount
    );

    // const tAmount = convertAmount()
    const tAmount = getConvertedValue(
      rates,
      fromCurrency,
      toCurrency,
      fromAmount
    );
    // (fromAmount * parseFloat(rates[toCurrency])) /
    // parseFloat(rates[fromCurrency]);
    setFromCurrency(fromCurrency);
    setToAmount(tAmount);
  };

  const toAmountChange = (tAmount: number) => {
    const frmAmount = getConvertedValue(
      rates,
      toCurrency,
      fromCurrency,
      tAmount
    );
    setFromAmount(frmAmount);
    setToAmount(tAmount);
  };
  const toCurrencyChange = (toCurrency: string) => {
    const frmAmount = getConvertedValue(
      rates,
      toCurrency,
      fromCurrency,
      toAmount
    );
    // (toAmount * parseFloat(rates[fromCurrency])) /
    // parseFloat(rates[toCurrency]);
    setFromAmount(frmAmount);
    setToCurrency(toCurrency);
  };

  return (
    <div>
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
        <form>
          <CurrencyRow
            currencyOptions={currencyOptions}
            currencyValue={fromCurrency}
            onCurrencyChange={fromCurrencyChange}
            amountValue={fromAmount}
            onAmountChange={fromAmountChange}
          />
          <CurrencyRow
            currencyOptions={currencyOptions}
            currencyValue={toCurrency}
            onCurrencyChange={toCurrencyChange}
            amountValue={toAmount}
            onAmountChange={toAmountChange}
          />
          <button
            className="text-right flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="button"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
