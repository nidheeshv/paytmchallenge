import React from "react";

export default function Expense(props: any) {
  const {
    currencyOptions,
    currencyValue,
    onCurrencyChange,
    amountValue,
    onAmountChange,
    description,
    onDescriptionChange,
    valid,
  } = props;
  return (
    <>
      <div className="flex w-full max-w-sm mx-auto space-x-3">
        <label className="block text-left" style={{ maxWidth: "400px" }}>
          Description
          <input
            type="text"
            className=" appearance-none border border-transparent w-full py-4 mt-1 px-1 h-2 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            required
          />
        </label>
        <label className="block text-left" style={{ maxWidth: "400px" }}>
          Amount
          <input
            type="number"
            className=" appearance-none border border-transparent w-full py-4 mt-1 px-1 h-2 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={amountValue}
            onChange={(e) => onAmountChange(e.target.value)}
            required
          />
        </label>
        <label className="block text-left" style={{ maxWidth: "400px" }}>
          <div className="text-gray-700 w-full">Currency</div>
          {/* className="form-select block w-full mt-1 flex-1 appearance-none border border-transparent py-4 px-4 h-2 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" */}
          <select
            className="mt-1 px-1 w-50 py-2 border rounded-lg text-black-primary text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={currencyValue}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((coption: string) => (
              <option key={coption} value={coption}>
                {coption}
              </option>
            ))}
          </select>
        </label>
      </div>
      {!valid && (
        <div className="text-right text-red-500">All fields are required</div>
      )}
    </>
  );
}
