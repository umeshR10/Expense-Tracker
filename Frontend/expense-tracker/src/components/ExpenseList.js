import React, { useEffect, useState } from "react"; // Importing React and hooks
import ExpenseService from "../services/ExpenseService"; // Importing the service to fetch and delete expenses

const ExpenseList = () => {
  // State to store the list of expenses
  const [expenses, setExpenses] = useState([]); 

  // useEffect hook to fetch expenses when the component mounts
  useEffect(() => {
    // Fetching the expenses from the API using the ExpenseService
    ExpenseService.getExpenses().then((response) => {
      // Setting the fetched data to the state (expenses)
      setExpenses(response.data);
    });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // Function to delete an expense
  const deleteExpense = (id) => {
    // Calling the deleteExpense method from ExpenseService to delete the expense by its id
    ExpenseService.deleteExpense(id).then(() => {
      // After successful deletion, filter out the deleted expense from the list in state
      setExpenses(expenses.filter((expense) => expense.id !== id));
    });
  };

  return (
    <div>
      <h3>Expense List :</h3>
      {/* Render a table with a list of expenses */}
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping over the expenses array to create rows for each expense */}
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td> {/* Display the description of the expense */}
              <td>Rs {expense.amount}</td> {/* Display the amount of the expense */}
              <td>{expense.date}</td> {/* Display the date of the expense */}
              <td>
                {/* Button to delete the expense, calling the deleteExpense function with the expense id */}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;  // Exporting the component for use in other parts of the app
