import AddTodos from './components/AddTodos'
import Todos from './components/Todos'


function App() {

  return (
    <>
      <h1 className="text-center text-white text-3xl">ToDo with Redux ToolKit RKT</h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App