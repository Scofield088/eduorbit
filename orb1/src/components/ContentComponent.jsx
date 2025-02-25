import React from 'react';
import './ContentComponent.css';

const ContentComponent = () => {
  const features = [
    {
      title: 'Collaborative Group Rooms',
      description:
        'Work with peers and teachers in real-time using collaborative group rooms to enhance your learning experience.',
      icon: '👥',
    },
    {
      title: 'Progress Tracking',
      description:
        'Track your academic journey with detailed insights into completed tasks, milestones, and learning progress.',
      icon: '📊',
    },
    {
      title: 'AI Assistance',
      description:
        'Get instant help from our integrated AI chatbot, designed to assist with queries and learning resources.',
      icon: '🤖',
    },
    {
      title: 'Personalized Dashboard',
      description:
        'Access a personalized dashboard tailored to your goals, progress, and ongoing tasks.',
      icon: '🖥️',
    },
    {
        title: 'Video Conferencing',
        description:
          'Connect seamlessly with peers and instructors through integrated video conferencing for real-time classes and discussions.',
        icon: '🎥',
    },
  ];

  return (
    <div className="content-component">
      <p>Your all-in-one platform for collaborative learning, progress tracking, and academic success.</p>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;
