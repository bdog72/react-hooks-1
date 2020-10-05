//
//

import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'bozo';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
