import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter [] makes it so only initial render updates.
const UseEffectBasics = () => {
  const [value, setValue] =useState(0);
  useEffect(()=> {
    if (value !== 0)
    document.title = `New Messages(${value})`
    else{
      document.title = 'The page'
    }
  }, [value])
  return <>
  <h1> {value} </h1>
  <button className='btn' onClick={()=> setValue(value+1)}>
    add me
  </button>
  <button className='btn' onClick={() => setValue(value-1)}> Subs me</button>
  <button className='btn' onClick={() => setValue(0)}>Clear Messages</button>
  </>;
};

export default UseEffectBasics;
