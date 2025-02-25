import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // Base URL for the backend
  const API = axios.create({
    baseURL: 'http://localhost:4001/todos',
  });

  // Add Authorization header
  API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  // Fetch Todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await API.get('/');
        setTodos(data); // Set the fetched todos to state
      } catch (err) {
        setError('Failed to fetch todos. Please check your authentication.');
      }
    };
    fetchTodos();
  }, []);

  // Add Todo
  const handleAddTodo = async () => {
    if (!text.trim()) {
      setError('Todo text cannot be empty.');
      return;
    }

    try {
      const { data } = await API.post('/', { text });
      setTodos([...todos, data]); // Add the new todo to the list
      setText('');
      setError('');
    } catch (err) {
      setError('Failed to add todo. Please try again.');
    }
  };

  // Delete Todo
  const handleDeleteTodo = async (id) => {
    try {
      await API.delete(`/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id)); // Remove the deleted todo
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
    }
  };

  // Toggle Todo
  const handleToggleTodo = async (id) => {
    try {
      const { data } = await API.patch(`/${id}/toggle`);
      setTodos(todos.map((todo) => (todo._id === id ? data : todo))); // Update the todo's completed status
    } catch (err) {
      setError('Failed to toggle todo. Please try again.');
    }
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo App</h1>

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Add Todo Form */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
          style={{
            padding: '10px',
            marginRight: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Todo
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: todo.completed ? '#DFF2BF' : '#FFF',
            }}
          >
            <span
              style={{
                flexGrow: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleToggleTodo(todo._id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo._id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#FF4D4D',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
