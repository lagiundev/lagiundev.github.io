import React, { useState } from 'react';

// ...person (spread operator) is to save the rest of the object and just change the message

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () =>
  setPerson( {...person, message: 'hello world'} )
  console.log(person)
  return <>
  <h3> {person.name} </h3>
  <h3> {person.age} </h3>
  <h3> {person.message} </h3>
  <button className='btn' type='button' onClick={changeMessage}> hello world </button>

  </>
};

export default UseStateObject;
