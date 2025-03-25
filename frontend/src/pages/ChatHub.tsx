import React, { useState } from 'react';
import '../styles/chatHub.css'

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  lastMessage?: string;
}

interface ChatMessages {
  [key: number]: Message[];
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Mamadou Diallo",
    role: "Organization Lead",
    avatar: `https://api.dicebear.com/7.x/personas/svg?seed=1&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear&size=96`,
    status: "online",
    lastMessage: "Thank you for the update!"
  },
  {
    id: 2,
    name: "Fatoumata Camara",
    role: "Project Manager",
    avatar: `https://api.dicebear.com/7.x/personas/svg?seed=2&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear&size=96`,
    status: "online",
    lastMessage: "When is the next meeting?"
  },
  {
    id: 3,
    name: "Ibrahim Sow",
    role: "Finance Officer",
    avatar: `https://api.dicebear.com/7.x/personas/svg?seed=3&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear&size=96`,
    status: "busy",
    lastMessage: "I've sent the report"
  },
  {
    id: 4,
    name: "Aissatou Bah",
    role: "Community Manager",
    avatar: `https://api.dicebear.com/7.x/personas/svg?seed=4&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear&size=96`,
    status: "offline",
    lastMessage: "Great work everyone!"
  }
];

const ChatHub: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<ChatMessages>({});
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim() && selectedUser) {
      const newMessage: Message = {
        id: (messages[selectedUser.id]?.length || 0) + 1,
        text: messageInput,
        sender: 'me',
        timestamp: new Date()
      };
      
      // Update messages
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedUser.id]: [...(prevMessages[selectedUser.id] || []), newMessage]
      }));

      // Update lastMessage for the selected user
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === selectedUser.id 
            ? { ...user, lastMessage: messageInput }
            : user
        )
      );

      setMessageInput('');
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
    <>
    <section className="no-chat-selected">
    <h2>Welcome to ChatHub</h2>
    <p>Select a user to start chatting</p>
    </section>
    <div className="chathub-container">
      <div className="users-sidebar">
        <div className="users-header">
          <h2>Messages</h2>
          <div className="search-box">
            <input type="text" placeholder="Search users..." />
          </div>
        </div>
        <div className="users-list">
          {users.map(user => (
            <div
              key={user.id}
              className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="user-avatar">
                <img src={user.avatar} alt={user.name} />
                <span className={`status-indicator ${user.status}`}></span>
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p className="user-role">{user.role}</p>
                <p className="last-message">{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-area">
        {selectedUser ? (
          <>
            <div className="chat-header">
              <div className="chat-user-info">
                <img src={selectedUser.avatar} alt={selectedUser.name} />
                <div>
                  <h3>{selectedUser.name}</h3>
                  <p>{selectedUser.role}</p>
                </div>
              </div>
            </div>
            <div className="messages-container">
              {messages[selectedUser.id]?.map(message => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              ))}
            </div>
            <form className="message-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="no-chat-selected">
            <p style={{paddingLeft:"20px"}}>Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ChatHub; 