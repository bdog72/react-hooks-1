//
//

import React, { useState } from 'react';
import Alert from './components/Alert';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(),
    charge: 'rent',
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: 'car payment',
    amount: 400,
  },
  {
    id: uuidv4(),
    charge: 'credit card bill',
    amount: 1200,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: 'success', text: 'Item Added' });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text:
          'charge cant be empty value and amount value has to be bigger than zero',
      });
      // handle alert called
    }
  };

  const clearItems = () => {
    console.log('clear all items');
    setExpenses([]);
    handleAlert({ type: 'danger', text: 'all items deleted' });
  };

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    console.log(tempExpenses);
    setExpenses(tempExpenses);
    handleAlert({ type: 'danger', text: 'item deleted' });
  };

  const handleEdit = (id) => {
    console.log(`Item edited : ${id}`);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {/* <Alert /> */}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        total spending:{' '}
        <span className='total'>
          $
          {expenses.reduce((accumulator, current) => {
            return (accumulator += parseInt(current.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
