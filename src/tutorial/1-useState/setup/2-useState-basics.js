//
//

import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('bozo boy');
  const handleClick = () => {
    if (text === 'bozo boy') {
      setText('Dork');
    } else {
      setText('bozo boy');
    }

    // let bozo = Math.floor(Math.random() * 10);
    // setText(bozo);
    // setText('Dork');
  };
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
      <h2>useState basic example</h2>
    </>
  );
};

export default UseStateBasics;
