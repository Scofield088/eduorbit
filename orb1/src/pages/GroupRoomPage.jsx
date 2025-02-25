import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GroupRoomPage.css';
import Header from '../components/Header';

const GroupRoom = () => {
  const [step, setStep] = useState('select'); // "select", "create", "join", or "room"
  const [groupLink, setGroupLink] = useState('');
  const [generatedGroupLink, setGeneratedGroupLink] = useState('');
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    try {
      const response = await fetch('http://localhost:4001/group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupLink: groupName ? `${groupName}-${Date.now()}` : `room-${Date.now()}`,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setGeneratedGroupLink(data.groupLink);
        setGroupLink(data.groupLink);
        setStep('room');
      } else {
        console.error('Error creating room:', data.message);
      }
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  // Join a room
  const handleJoinRoom = async () => {
    try {
      const response = await fetch(`http://localhost:4001/group/${groupLink}`);
      const data = await response.json();
      if (response.ok) {
        setMessages(data.messages);
        setFiles(data.files);
        setStep('room');
      } else {
        console.error('Error joining room:', data.message);
      }
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  // Send a message
  const handleSendMessage = async () => {
    if (input.trim()) {
      try {
        const response = await fetch(`http://localhost:4001/group/${groupLink}/message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: 'You',
            text: input,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          setMessages(data.messages);
          setInput('');
        } else {
          console.error('Error sending message:', data.message);
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  // File upload handler
  const handleFileUpload = async (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const fileNames = uploadedFiles.map((file) => file.name);

    try {
      const response = await fetch(`http://localhost:4001/group/${groupLink}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: fileNames }),
      });

      const data = await response.json();
      if (response.ok) {
        setFiles([...files, ...fileNames]);
      } else {
        console.error('Error uploading files:', data.message);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="group-room">
      <Header />
      {step === 'select' && (
        <div className="options">
          <h2>Group Room</h2>
          <button onClick={() => setStep('create')}>Create Room</button>
          <button onClick={() => setStep('join')}>Join Room</button>
        </div>
      )}
      {step === 'create' && (
        <div className="create-room">
          <input
            type="text"
            placeholder="Enter Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <button onClick={handleCreateRoom}>Create Room</button>
        </div>
      )}
      {step === 'join' && (
        <div className="join-room">
          <input
            type="text"
            placeholder="Enter Group Link"
            value={groupLink}
            onChange={(e) => setGroupLink(e.target.value)}
          />
          <button onClick={handleJoinRoom}>Join Room</button>
        </div>
      )}
      {step === 'room' && (
        <div className="chat-window">
          <h3>Group: {groupLink}</h3>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="files">
            <input type="file" multiple onChange={handleFileUpload} />
            <div>
              {files.map((file, index) => (
                <div key={index}>{file}</div>
              ))}
            </div>
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div> 
        </div>
      )}
    </div>
  );
};

export default GroupRoom;
