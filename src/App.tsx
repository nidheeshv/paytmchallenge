import React from "react";
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
console.log(process.env.REACT_APP_API_KEY);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="bg-blue-300 text-2xl p-2">
        Expense Report Manager
      </header>
      <Home />
    </QueryClientProvider>
  );
}
