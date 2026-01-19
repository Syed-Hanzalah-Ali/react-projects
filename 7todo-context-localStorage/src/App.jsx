import React, { useEffect, useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos,setTodos]=useState([]);

  function addTodo(todo){
    setTodos((prevTodos)=>/*return*/[{id:Date.now(),...todo/* completed:false is default */},...prevTodos])
    
  }
  function updatedTodo(id,newTodo){
    setTodos((prevTodo)=>{
      return(
        // apply map on prev todo to grab each todo
        prevTodo.map((eachTodo)=>{
          return(
            eachTodo.id===id?newTodo:eachTodo
          )
        })
      )
    })
  }

  function deleteTodo(id){
    setTodos((prevTodo)=>prevTodo.filter((eachTodo)=>eachTodo.id!==id))
  }

  function toggleCompleted(id){
    setTodos((prevTodo)=>prevTodo.map((eachTodo)=>eachTodo.id===id?{...eachTodo,completed:!eachTodo.completed}:eachTodo))
  }

  useEffect(()=>{
    console.log("get from localstorage");
    
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    
  },[todos])

  return (

    <TodoContext.Provider value={{todos,addTodo,updatedTodo,deleteTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo)=>{
            return(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>

              </div>
            )
          })}
        </div>
      </div>
    </div>

    </TodoContext.Provider>
  );
}

export default App;
