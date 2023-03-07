import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] =useState(false);

  return (
  <>
  <h1>{text || 'john doe'}</h1>
  <button className='btn' onClick={()=>setIsError(!isError)} >toggle error </button>
  {isError && <h1>WHOOPS...</h1>}
  {isError ? <p> here is the true (error) paragraph </p> : <div>
    <h2> no error to look here</h2>
  </div> }
  
  
  
  
  </>);
};

export default ShortCircuit;
