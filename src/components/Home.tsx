import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loader from "./Loader";
import Error from "./Error";
import CurrencyRow from "./CurrencyRow";
import Expense from "./Expense";
import Report from "./Report";

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
  const [expenses, setExpenses] = useState<any[]>([]);
  const [rates, setRates] = useState<any>([]);
  const [dataError, setDataError] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(true);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("CAD");
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [toAmount, setToAmount] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  // { description: "", amount: 1, currency: "CAD" },

  // data api call
  const { isLoading, data, error } = useQuery("repoData", () =>
    fetch(
      `${process.env.REACT_APP_URL}/latest?access_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json())
  );

  useEffect(() => {
    if (data && data.rates) {
      // console.log("data1", data);
      setRates(data.rates);
      setCurrencyOptions([...Object.keys(data.rates)]);
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

  const addExpense = () => {
    console.log("add", description, expenses);
    if (expenses.length < 5) {
      if (!description || !toAmount || toAmount < 0) {
        setValid(false);
        return;
      }

      setValid(true);
      const amnt = getConvertedValue(rates, toCurrency, "CAD", toAmount);
      const exp = { description, amnt, currency: "CAD" };
      setExpenses([...expenses, exp]);
      setDescription("");
      setToAmount(0);
    }
  };

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

    const tAmount = getConvertedValue(
      rates,
      fromCurrency,
      toCurrency,
      frmAmount
    );
    setFromAmount(frmAmount);
    setToAmount(tAmount);
  };
  const fromCurrencyChange = (fromCurrency: string) => {
    console.log(
      fromCurrency,
      rates[fromCurrency],
      toCurrency,
      rates[toCurrency],
      toAmount
    );

    const tAmount = getConvertedValue(
      rates,
      fromCurrency,
      toCurrency,
      fromAmount
    );
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
    setFromAmount(frmAmount);
    setToCurrency(toCurrency);
  };
  console.log("expenses", expenses);
  return (
    <div>
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
        <form>
          <Expense
            description={description}
            onDescriptionChange={setDescription}
            currencyOptions={currencyOptions}
            currencyValue={toCurrency}
            onCurrencyChange={toCurrencyChange}
            amountValue={toAmount}
            onAmountChange={toAmountChange}
            valid={valid}
          />
          <div className="flex w-full max-w-sm mx-auto mt-1 space-x-3">
            <button
              className="text-right flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addExpense();
              }}
            >
              Add
            </button>
            <button
              className="text-right flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full text-center mt-2">
          <Report expenses={expenses} />
        </div>
      </div>
    </div>
  );
}
