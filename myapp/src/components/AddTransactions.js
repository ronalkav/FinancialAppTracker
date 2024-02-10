import React, { useState } from 'react';

export default function AddTransactions({ id, addTransaction }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [type, setType] = useState("expense"); // Default to "expense"
    const [category, setCategory] = useState('Groceries'); // Default category

    const onSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: id,
            text: text,
            amount: type === 'expense' ? -Math.abs(amount) : Math.abs(amount), // Negate if expense
            date: date,
            type, // Include transaction type
            category // Include category
        };
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
        setDate("");
        setType("expense"); // Reset to default
        setCategory('Groceries'); // Reset to default category
    };

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                {/* Text input for naming the transaction */}
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        id="text"
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                    />
                </div>

                {/* Dropdown for selecting transaction type */}
                <div className="form-control">
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                {/* Category dropdown */}
                <div className="form-control">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Groceries">Groceries</option>
                        <option value="Rent">Rent</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Salary">Salary</option>
                        <option value="Gifts">Gifts</option>
                        <option value="Other">Other</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                
                {/* Input for amount */}
                <div className="form-control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount..." 
                    />
                </div>
                
                {/* Input for date */}
                <div className="form-control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}
