import React, { useState, useEffect } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hit the gym', completed: false },
    { id: 2, text: 'Pay bills', completed: true },
    { id: 3, text: 'Meet George', completed: false },
    { id: 4, text: 'Buy eggs', completed: false },
    { id: 5, text: 'Read a book', completed: false },
    { id: 6, text: 'Organize office', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === '') {
      alert('You must write something!');
      return;
    }
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-page">
      <div className="todo-container">
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <span onClick={addTodo} className="addBtn">
          Add
        </span>
      </div>
      
      <ul id="myUL">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'checked' : ''}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <span
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              ×
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ToDoList;
