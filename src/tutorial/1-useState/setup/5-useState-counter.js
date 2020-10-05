// //
// //

import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  function randomColor() {
    return `#${Math.random().toString(16).substr(-6)}`;
  }

  console.log(randomColor());

  const changeColor = () => {
    console.log('Bozo');
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button
        onClick={changeColor}
        className='btn'
        style={{ background: 'red' }}
      >
        bozo
      </button>
      <button onClick={() => setValue(value - 1)} className='btn'>
        decrement
      </button>
      <button onClick={reset} className='btn'>
        reset
      </button>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increment
      </button>
    </div>
  );
}

export default Counter;
