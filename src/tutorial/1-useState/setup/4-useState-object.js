//
//

import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Bozo Boy',
    age: 48,
    message: 'Hey Bozo Boy',
  });
  const changMessage = () => {
    setPerson({ ...person, message: 'hi' });
  };
  console.log(person);
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
