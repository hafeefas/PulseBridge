import React, { useState } from 'react';
import '../styles/chatHub.css';

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline';
  lastMessage?: string;
  lastMessageTime?: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  timestamp: Date;
}

const ChatHub: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>({});

  const users: User[] = [
    {
      id: 1,
      name: 'Ousmane Diallo',
      role: 'Member',
      avatar: '👨🏾',
      status: 'online',
      lastMessage: 'Thank you for the update!',
      lastMessageTime: '10:30 AM'
    },
    {
      id: 2,
      name: 'Kadiatou Barry',
      role: 'Admin',
      avatar: '👩🏾',
      status: 'offline',
      lastMessage: 'I will review the documents.',
      lastMessageTime: 'Yesterday'
    },
    {
      id: 3,
      name: 'Alpha Baldé',
      role: 'Member',
      avatar: '👨🏾',
      status: 'online',
      lastMessage: 'When is the next meeting?',
      lastMessageTime: '2:15 PM'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedUser) {
      const newMessage: Message = {
        id: Date.now(),
        text: messageInput.trim(),
        sender: 'me',
        timestamp: new Date()
      };

      setMessages(prev => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage]
      }));

      // Update the user's last message
      const updatedUsers = users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, lastMessage: messageInput.trim(), lastMessageTime: 'Just now' }
          : user
      );

      setMessageInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="user-list">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="user-avatar">
                <span>{user.avatar}</span>
                <span className={`status-indicator ${user.status}`}></span>
              </div>
              <div className="user-info">
                <h4>{user.name}</h4>
                <span className="user-role">{user.role}</span>
                <p className="last-message">{user.lastMessage}</p>
              </div>
              <span className="message-time">{user.lastMessageTime}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        {selectedUser ? (
          <>
            <div className="chat-header">
              <div className="chat-user-info">
                <div className="user-avatar">
                  <span>{selectedUser.avatar}</span>
                  <span className={`status-indicator ${selectedUser.status}`}></span>
                </div>
                <div className="user-details">
                  <h3>{selectedUser.name}</h3>
                  <span className={`status-text ${selectedUser.status}`}>
                    {selectedUser.status === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
              <div className="chat-actions">
                <button className="action-btn">📹</button>
                <button className="action-btn">📞</button>
              </div>
            </div>

            <div className="chat-messages">
              {messages[selectedUser.id]?.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <textarea
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="input-actions">
                <button className="attach-btn">📷</button>
                <button className="send-btn" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="welcome-screen">
            <div className="welcome-content">
              <div className="welcome-icon">💬</div>
              <h1>Welcome to ChatHub</h1>
              <p>Connect with your team members through instant messaging and calls</p>
              
              <div className="welcome-features">
                <div className="feature">
                  <span className="feature-icon">💭</span>
                  <span>Instant Messaging</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📞</span>
                  <span>Audio Calls</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📹</span>
                  <span>Video Calls</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📷</span>
                  <span>Share Media</span>
                </div>
              </div>
              
              <p className="welcome-tip">
                Select a user from the sidebar to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHub; 