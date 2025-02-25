import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (implement actual logic here)
    alert('You have been logged out successfully.');
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <h3>Profile Options</h3>
        <ul>
          <li><a href="#view-profile">View Profile</a></li>
          <li><a href="#edit-profile">Edit Profile</a></li>
          <li><a href="#account-settings">Account Settings</a></li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="content">
        <h1>Student Profile</h1>
        <div className="profile-section">
          <h3>Personal Information</h3>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +1234567890</p>
        </div>
        
        <div className="profile-section">
          <h3>Academic Details</h3>
          <p><strong>Course:</strong> B.Tech in Computer Science</p>
          <p><strong>Year:</strong> 3rd Year</p>
          <p><strong>Student ID:</strong> ST123456</p>
        </div>

        <div className="profile-section">
          <h3>Extra Features</h3>
          <p>Any additional functionality, such as achievements or completed challenges, can be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
