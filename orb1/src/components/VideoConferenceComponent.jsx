// src/components/VideoConferenceComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoConferenceComponent.css';

const VideoConferenceComponent = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/video-conference'); // Redirects to Video Conference page
  };

  return (
    <div className="video-conference-component">
      <div className="flash-card">
        <h2>Join a Video Conference</h2>
        <p>
          Collaborate in real-time with your peers and instructors. Start or join a video conference now and make learning more interactive and engaging.
        </p>
        <button className="conference-button" onClick={handleRedirect}>
          Go to Video Conference
        </button>
      </div>
    </div>
  );
};

export default VideoConferenceComponent;
