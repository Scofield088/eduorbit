import React from "react";
import { useNavigate } from "react-router-dom";
import "./CGPA.css";

const CGPA = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/cgpa-planner");
  };

  return (
    <div className="cgpa-component">
      <div className="cgpa-card">
        <h2>Boost Your Grades</h2>
        <p>
          Wondering how to boost your exam performance? We've got you covered! 📊
          Our Marks Analysis Tool dives deep into your past scores to identify
          your strengths and areas needing attention. Get tailored study
          suggestions to focus on the subjects that matter most—whether it's
          mastering tricky math problems or acing those chemistry equations! 🚀
        </p>
        <p>
          Start your journey to better grades today and unlock your full
          potential with smart, actionable insights. Ready to transform the way
          you prepare? Let’s get started!
        </p>
        <button className="cgpa-button" onClick={handleRedirect}>
          Boost My Grades
        </button>
      </div>
    </div>
  );
};

export default CGPA;

