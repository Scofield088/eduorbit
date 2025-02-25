import React from 'react';
import './DescriptiveComponent.css';
import eduImage from '../assets/eduimage.jpg';

const DescriptiveComponent = () => {
  return (
    <section className="description-section">
      <div className="description-container">
        <div className="description-text">
          {/* <h1>Welcome to EduOrbit</h1> */}
          <p>
            EduOrbit is your ultimate platform for academic management and collaboration. Designed for students,
            educators, and administrators, EduOrbit streamlines the educational experience with tools for group
            communication, progress tracking, and personalized feedback.
          </p>
          <p>
            Empower your learning journey with innovative features, data-driven insights, and a seamless interface
            to achieve your academic goals.
          </p>
        </div>
        <div className="description-image">
          <img src={eduImage} alt="EduOrbit Overview" />
        </div>
      </div>
    </section>
  );
};

export default DescriptiveComponent;
