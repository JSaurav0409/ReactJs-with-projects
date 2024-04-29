import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    if(counter < 20)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Header : {counter}</h1>
      <h2>Chai aur react</h2>
      <h3>counter value : {counter}</h3>

      <button
        onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
