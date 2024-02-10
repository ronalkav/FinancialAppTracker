import React, {useState} from 'react'

export default function AddTransactions({id, addTransaction}) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const [type, setType] = useState("expense") // Default to "expense"

    const onSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: id,
            text: text,
            amount: type === 'expense' ? -Math.abs(amount) : +Math.abs(amount), // Negate if expense
            date: date,
            type // Include this
        };
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
        setDate("");
        setType("expense"); // Reset to default
    }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
            <label>Text</label>
            <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        
        {/* Dropdown for selecting transaction type */}
        <div className="form-control">
            <label>Type</label>
            <select onChange={(event) => setType(event.target.value)} value={type}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
        </div>
        
        <div className="form-control">
            <label>Amount</label>
            <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
            <label>Date</label>
            <input value={date} onChange={(event) => setDate(event.target.value)} type="date" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>

)
}
