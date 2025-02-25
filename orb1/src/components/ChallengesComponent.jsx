// src/components/ChallengesComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChallengesComponent.css';

const ChallengesComponent = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/challenges'); // Redirects to Challenges page
  };

  return (
    <div className="challenges-component">
      <div className="flash-card">
        <h2>Take on Challenges</h2>
        <p>
          Create exciting quizzes, share links with your friends, and compete together! 
          See who scores the highest within the time limit and secure your spot on the leaderboard.
        </p>
        <button className="challenges-button" onClick={handleRedirect}>
          Challenges/Quizzes
        </button>
      </div>
    </div>
  );
};

export default ChallengesComponent;
