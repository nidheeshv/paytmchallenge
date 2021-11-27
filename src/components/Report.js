import React, { useState } from "react";

export default function Report({ expenses }) {
  // const [total, setTotal] = useState(0);
  let total = 0;
  return (
    <table class="table-auto w-full mt-2 border-1">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenseItem, i) => {
          // setTotal(total + expenseItem.amnt);
          total += expenseItem.amnt;

          return (
            <tr>
              <td>{expenseItem.description}</td>
              <td>{expenseItem.amnt}</td>
              <td>{expenseItem.currency}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan="2">Total</td>
          <td>{total.toFixed(2)} CAD</td>
        </tr>
      </tbody>
    </table>
  );
}
