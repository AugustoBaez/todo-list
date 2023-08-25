import './App.css';
import TodoForm from './components/TodoForm';
import React, { useState } from 'react';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <div className='totalList'>
        <TodoForm todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
