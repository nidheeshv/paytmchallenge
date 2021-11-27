import React from "react";
import { render, screen } from "@testing-library/react";
import CurrencyRow from "../components/CurrencyRow";

const currencyOptions = ["CAD", "INR"];

describe("CurrencyRow", () => {
  test("CurrencyRow renders fine", () => {
    const { container } = render(
      <CurrencyRow currencyOptions={currencyOptions} />
    );
    expect(container).toBeInTheDocument();
  });
});
