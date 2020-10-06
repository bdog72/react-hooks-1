//
//

import React, { useState, useEffect } from 'react';

// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`Call useEffect`);
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  console.log(`Render Component`);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me Bozo
      </button>
    </>
  );
};

export default UseEffectBasics;

// import React, { useState } from 'react';

// function Color() {
//   const [changeColor, setChangeColor] = useState('');

//   function randomColor() {
//     return `#${Math.random().toString(16).substr(-6)}`;
//   }

//   const dodo = () => {
//     setChangeColor(randomColor());
//     // setColor('red');
//   };
//   return (
//     <div style={{ background: changeColor }}>
//       {/* <button
//         onClick={() => setChangeColor(randomColor())}
//         style={{ color: changeColor }}
//         className='btn'
//       >
//         Click Me
//       </button> */}
//       <button onClick={dodo} style={{ color: changeColor }} className='btn'>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default Color;
