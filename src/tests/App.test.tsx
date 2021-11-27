import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("App renders fine", () => {
    render(<App />);
    const currencyConvert = screen.getByText(/Currency Converter/i);
    expect(currencyConvert).toBeInTheDocument();
  });
});
