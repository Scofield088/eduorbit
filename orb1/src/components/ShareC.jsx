import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShareC.css";

const ShareC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/share");
  };

  return (
    <div className="sharec-container">
      <div className="sharec-card">
        <h2>Share Your Journey</h2>
        <p>
          Inspire others by sharing your achievements, roadmap, and valuable suggestions! 
          Provide your profile links and let your journey motivate others to excel. 
        </p>
        <button className="sharec-button" onClick={handleRedirect}>
          Share
        </button>
      </div>
    </div>
  );
};

export default ShareC;
