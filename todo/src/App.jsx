
import { useState } from "react"
import {TodoProvider} from "./context/Todo"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
function App() {
const [todos,settodos]=useState([])

const addTodo=(todo)=>{
settodos((prevtodo)=>[...todo,prevtodo])
}


const updateTodo =(id,todo)=>{
settodos((prev)=>(prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo)))
}

const deleteTodo=(id)=>{
settodos((prev)=>(prev.filter((prevTodo)=>prevTodo.id!==id)))
}

const toggleComplete = (id) => {
  setTodos((prev) => 
  prev.map((prevTodo) => 
    prevTodo.id === id ? { ...prevTodo, 
      completed: !prevTodo.completed } : prevTodo))
}



useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])


  return (
    <TodoProvider value={{todos,toggleComplete,addTodo,deleteTodo,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                  <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                  <TodoItem/>
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
          