//
//

import React, { useEffect, useState } from 'react';
import Alert from './components/Alert';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';

// const initialExpenses = [
//   {
//     id: uuidv4(),
//     charge: 'rent',
//     amount: 1600,
//   },
//   {
//     id: uuidv4(),
//     charge: 'car payment',
//     amount: 400,
//   },
//   {
//     id: uuidv4(),
//     charge: 'credit card bill',
//     amount: 1200,
//   },
// ];

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: 'Item Edited' });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'success', text: 'Item Added' });
      }
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
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
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
          edit={edit}
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
