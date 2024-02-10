import React from 'react'

export default function Balance({ transactions }) {
    //const amount = transactions.map((transaction) => Number(transaction.amount));
    //const total = amount.reduce((acc, item) => (acc + item), 0)
    const total = transactions
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
  return (
    <div>
        <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}
