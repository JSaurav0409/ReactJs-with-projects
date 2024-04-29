import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Saurav",
    age : 23
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      
      <Card username="chaiaurcode" btnText="visit me"  />
      <Card username="Ladie" />
      
    </>
  )
}

export default App
