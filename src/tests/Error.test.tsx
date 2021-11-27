import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../components/Error";

describe("Error", () => {
  test("renders error message", () => {
    render(<Error message="Something went wrong. Please try again later." />);
    const currencyConvert = screen.getByText(
      /Something went wrong. Please try again later./i
    );
    expect(currencyConvert).toBeInTheDocument();
  });
});
