import React from 'react'
import Setup from './tutorial/1-useState/final/2-useState-basics'
function App() {
  return (
    <div className='container'>
      <Setup/>
    </div>
  )
}

export default App



/*
function App() {
    const [people, setPeople] = useState(data);
    return (
    <main>
        <section className='container'>
            <h3>Birthdays today</h3>
            <List people={people}/>
            <button onClick={()=>setPeople([])}> Clear all </button>
        </section>
    </main>
    )
}
*/
