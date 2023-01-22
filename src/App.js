import './App.css';
import TodoForm from './components/TodoForm';
import React, { useState } from 'react';
import List from './components/List';

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     content: "",
  //     completed: false,
  //     id: Math.random() * 100
  //   }
  // ])
  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
