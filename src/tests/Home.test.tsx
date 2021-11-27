import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

describe("Home", () => {
  test("Home renders fine", () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    // const currencyConvert = screen.getByText(/Currency Converter/i);
    expect(container).toBeInTheDocument();
  });
});
