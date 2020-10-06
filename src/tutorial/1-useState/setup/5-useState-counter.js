// //
// //

import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  function randomColor() {
    return `#${Math.random().toString(16).substr(-6)}`;
  }

  console.log(randomColor());

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <button onClick={() => setValue(value - 1)} className='btn'>
          decrement
        </button>
        <button onClick={reset} className='btn'>
          reset
        </button>
        <button onClick={() => setValue(value + 1)} className='btn'>
          increment
        </button>
      </section>
      {/* ************************************ */}
      {/* ************************************ */}
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
}

export default Counter;
