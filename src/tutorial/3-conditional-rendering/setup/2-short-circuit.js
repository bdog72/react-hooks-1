//
//

import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'Bozo Beak'}</h1>
      <button onClick={() => setIsError(!isError)} className='btn'>
        Toggle Error{' '}
      </button>
      {/* {isError ? <button className='btn'>Toggle Error </button> : <h1>Bozo</h1>} */}
      {isError && <h1>Hello World!</h1>}
      {isError ? <p>There is an error...</p> : <div>There is no error...</div>}
      {/* {!text && <h1>Hello World!</h1>} */}
    </>
  );
};

export default ShortCircuit;

// const firstValue = text || 'hello world';
// const secondValue = text && 'hello world';

// <h1>{firstValue}</h1>
// <h1>Value: {secondValue}</h1>
