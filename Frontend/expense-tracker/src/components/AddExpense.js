
import React, { useState } from 'react';   // Importing necessary hooks from React
import ExpenseService from '../services/ExpenseService';  // Importing the service to handle API calls for expenses

const AddExpense = ({ onAdd }) => {   // The component receives an onAdd prop which will be used to pass back the added expense
  // State variables to hold the form values: description, amount, and date
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior (page reload)

    // Create an expense object with the form data
    const expense = { description, amount, date };
    
    // Call the service to add the expense to the backend (or any other necessary action)
    ExpenseService.addExpense(expense).then((response) => {
      onAdd(response.data);
    });
    
    // Clear the form after submission
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    // Use a Bootstrap container for the form to ensure it aligns well on different screen sizes
    <div className="container">
      <form className="form-control mb-4 p-4" onSubmit={handleSubmit}>
        {/* Create a responsive grid layout for the input fields */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-2">
            {/* Input field for the description of the expense */}
            <input
              type="text"
              placeholder="Description"
              value={description}
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-2">
            {/* Input field for the amount of the expense */}
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              className="form-control"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-2">
            {/* Input field for the date of the expense */}
            <input
              type="date"
              value={date}
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit button for the form */}
        <button type="submit" className="btn btn-outline-primary w-100">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;  // Exporting the component for use in other parts of the app
