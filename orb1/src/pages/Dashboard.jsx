import React from 'react';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      tasks: [
        { id: 1, title: 'Complete Math Assignment', status: 'In Progress' },
        { id: 2, title: 'Finish Science Project', status: 'Not Started' },
        { id: 3, title: 'Submit English Essay', status: 'Completed' },
      ],
    };
  
    return (
      
      <div className="dashboard">
        <Header />
        <div className="profile-section">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
  
        <div className="tasks-section">
          <h3>Your Tasks</h3>
          <ul className="tasks-list">
            {user.tasks.map((task) => (
              <li key={task.id} className={`task ${task.status.toLowerCase().replace(' ', '-')}`}>
                <span className="task-title">{task.title}</span>
                <span className="task-status">{task.status}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Dashboard;