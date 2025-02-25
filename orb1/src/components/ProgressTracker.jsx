import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ progress }) => {
  const [todos, setTodos] = useState({
    daily: [
      { text: 'Complete assignment', completed: false },
      { text: 'Read 10 pages of a book', completed: false },
    ],
    monthly: [
      { text: 'Submit project proposal', completed: false },
      { text: 'Attend 3 workshops', completed: false },
    ],
    semester: [
      { text: 'Finish all coursework', completed: false },
      { text: 'Achieve a 9+ GPA', completed: false },
    ],
  });

  const toggleCompletion = (type, index) => {
    const updatedTodos = { ...todos };
    updatedTodos[type][index].completed = !updatedTodos[type][index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="progress-tracker">
      {/* TODO List Section */}
      <div className="todo-section">
        <h2>Set Your Goals, Achieve Your Dreams!</h2>
        <p>
          "Success starts with clear goals. Track your daily, monthly, and semester goals to stay on the path to excellence."
        </p>
        <div className="todo-lists">
          {Object.keys(todos).map((type) => (
            <div key={type} className="todo-list">
              <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h3>
              <ul>
                {todos[type].map((todo, index) => (
                  <li
                    key={index}
                    className={todo.completed ? 'completed' : ''}
                    onClick={() => toggleCompletion(type, index)}
                  >
                    {todo.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracker Section */}
      <h3>Your Progress</h3>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% Completed</p>
    </div>
  );
};

export default ProgressTracker;
