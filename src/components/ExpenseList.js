//
//

import React from 'react';
import Item from './Item';

import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, clearItems, handleEdit, handleDelete }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
          clear expenses
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
