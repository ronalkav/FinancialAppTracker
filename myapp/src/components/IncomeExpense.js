import React from 'react'

export default function IncomeExpense({transactions}) {
    //const amount = transactions.map((transaction) => Number(transaction.amount));
    //const income = amount.filter((item) => item > 0).reduce((acc,item) => (acc + item), 0);
    const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc + item.amount), 0)
    .toFixed(2);
    //const expenses = amount.filter((item) => item < 0).reduce((acc,item) => (acc + item), 0);
    const expenses = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => (acc + Math.abs(item.amount)), 0) // Use Math.abs to ensure positive values
    .toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
        <h4>Income</h4>
        <p className= "money plus">+${income}</p>
        </div>
        <div>
        <h4>Expenses</h4>
        <p className= "money minus">${expenses}</p>
        </div>
      
    </div>
  )
}
