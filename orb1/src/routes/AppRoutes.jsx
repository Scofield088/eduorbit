import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import GroupRoomPage from '../pages/GroupRoomPage';
import ProgressPage from '../pages/ProgressPage.jsx';
import ChallengesPage from '../pages/ChallengesPage';
import VideoConferencePage from '../pages/VideoConferencePage';
import LoginPage from '../pages/LoginPage'; 
import Signup from '../pages/Signup';
import ProfilePage from '../pages/ProfilePage';
import RecommendationPage from '../pages/RecommendationPage'; 
import Share from '../pages/Share';
import CGPAPlanner from '../pages/CGPAPlanner';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Redirect to Login by default */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/group-room" element={<GroupRoomPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/video-conference" element={<VideoConferencePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recommendation" element={<RecommendationPage />} />
        <Route path="/share" element={<Share />} />
        <Route path="/cgpa-planner" element={<CGPAPlanner />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
