import './App.css';
import TodoForm from './components/TodoForm';
import React, { useState } from 'react';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([
    {
      content: "hola",
      completed: false
    }
  ])


  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
}

export default App;
