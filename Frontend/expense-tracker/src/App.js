import React from 'react';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';

const App = () => {
  return (
    <div className='p-3'>
      <Navbar />
      <AddExpense onAdd={() => {}} />
      <ExpenseList />
    </div>
  );
};

export default App;
