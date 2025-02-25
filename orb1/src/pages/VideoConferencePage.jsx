import React, { useState } from 'react';
import './VideoConferencePage.css';

const VideoConferencePage = () => {
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [platform, setPlatform] = useState('jitsi'); // Default to Jitsi

  const handleStartMeeting = () => {
    setIsMeetingStarted(true);
  };

  const handleEndMeeting = () => {
    setIsMeetingStarted(false);
  };

  return (
    <div className="video-conference-page">
      <h1>Video Conference</h1>
      <p>Collaborate in real-time with your peers and instructors using our video conferencing feature.</p>

      {/* Platform Selection */}
      {!isMeetingStarted && (
        <div className="platform-selection">
          <label>
            Choose Platform:
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="platform-selector"
            >
              <option value="jitsi">Jitsi Meet</option>
              <option value="google">Google Meet</option>
            </select>
          </label>
        </div>
      )}

      {/* Meeting Controls */}
      {!isMeetingStarted ? (
        <button className="start-meeting-button" onClick={handleStartMeeting}>
          Start Conference
        </button>
      ) : (
        <div className="meeting-room">
          {platform === 'jitsi' ? (
            <iframe
              src="https://meet.jit.si/EduOrbitConference"
              title="Jitsi Conference"
              allow="camera; microphone; fullscreen"
              frameBorder="0"
              className="conference-frame"
            ></iframe>
          ) : (
            <iframe
              src="https://meet.google.com/new"
              title="Google Meet Conference"
              allow="camera; microphone; fullscreen"
              frameBorder="0"
              className="conference-frame"
            ></iframe>
          )}
          <button className="end-meeting-button" onClick={handleEndMeeting}>
            End Conference
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoConferencePage;
