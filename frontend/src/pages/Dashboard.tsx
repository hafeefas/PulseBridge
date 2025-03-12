import React from 'react';

const Dashboard: React.FC = () => {
  // Roster data with updated names and better images
  const executiveMembers = [
    {
      id: 1,
      name: "Mamadou Diallo",
      role: "President",
      image: "https://ui-avatars.com/api/?name=Mamadou+Diallo&background=0E563B&color=fff&size=150",
      status: "online"
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      role: "Vice President",
      image: "https://ui-avatars.com/api/?name=Fatoumata+Camara&background=2563EB&color=fff&size=150",
      status: "online"
    },
    {
      id: 3,
      name: "Ibrahima Touré",
      role: "Secretary",
      image: "https://ui-avatars.com/api/?name=Ibrahima+Toure&background=7C3AED&color=fff&size=150",
      status: "busy"
    },
    {
      id: 4,
      name: "Aissatou Baldé",
      role: "Treasurer",
      image: "https://ui-avatars.com/api/?name=Aissatou+Balde&background=DB2777&color=fff&size=150",
      status: "online"
    }
  ];

  const committeeHeads = [
    {
      id: 5,
      name: "Lamine Condé",
      role: "Events Committee",
      image: "https://ui-avatars.com/api/?name=Lamine+Conde&background=059669&color=fff&size=150",
      status: "online"
    },
    {
      id: 6,
      name: "Mariam Sylla",
      role: "Finance Committee",
      image: "https://ui-avatars.com/api/?name=Mariam+Sylla&background=9333EA&color=fff&size=150",
      status: "offline"
    },
    {
      id: 7,
      name: "Ousmane Barry",
      role: "Membership Committee",
      image: "https://ui-avatars.com/api/?name=Ousmane+Barry&background=DC2626&color=fff&size=150",
      status: "busy"
    }
  ];

  const generalMembers = [
    {
      id: 8,
      name: "Kadiatou Cissé",
      role: "Senior Member",
      image: "https://ui-avatars.com/api/?name=Kadiatou+Cisse&background=2563EB&color=fff&size=150",
      status: "online"
    },
    {
      id: 9,
      name: "Sékou Kouyaté",
      role: "Events Coordinator",
      image: "https://ui-avatars.com/api/?name=Sekou+Kouyate&background=0E563B&color=fff&size=150",
      status: "offline"
    },
    {
      id: 10,
      name: "Djenebou Diarra",
      role: "Community Liaison",
      image: "https://ui-avatars.com/api/?name=Djenebou+Diarra&background=7C3AED&color=fff&size=150",
      status: "online"
    }
  ];

  return (
    <div className="dashboard-layout">
      <aside className="roster-sidebar">
        <div className="roster-section">
          <h3>Executive Board</h3>
          <div className="roster-list">
            {executiveMembers.map(member => (
              <div key={member.id} className="roster-item">
                <img src={member.image} alt={member.name} className="roster-avatar" />
                <div className="roster-info">
                  <div className="roster-name">{member.name}</div>
                  <div className="roster-role">{member.role}</div>
                </div>
                <div className={`roster-status ${member.status}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="roster-section">
          <h3>Committee Heads</h3>
          <div className="roster-list">
            {committeeHeads.map(member => (
              <div key={member.id} className="roster-item">
                <img src={member.image} alt={member.name} className="roster-avatar" />
                <div className="roster-info">
                  <div className="roster-name">{member.name}</div>
                  <div className="roster-role">{member.role}</div>
                </div>
                <div className={`roster-status ${member.status}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="roster-section">
          <h3>Key Members</h3>
          <div className="roster-list">
            {generalMembers.map(member => (
              <div key={member.id} className="roster-item">
                <img src={member.image} alt={member.name} className="roster-avatar" />
                <div className="roster-info">
                  <div className="roster-name">{member.name}</div>
                  <div className="roster-role">{member.role}</div>
                </div>
                <div className={`roster-status ${member.status}`} />
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="welcome-section">
          <h1>Welcome back!</h1>
          <p>Here's what's happening in your community today</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Community Overview</h3>
              <span className="badge">Last 30 days</span>
            </div>
            <div className="stats-grid">
              <div className="stat-box">
                <h4>Total Members</h4>
                <span className="stat-number">150</span>
                <span className="stat-trend positive">+12%</span>
              </div>
              <div className="stat-box">
                <h4>Active Members</h4>
                <span className="stat-number">89</span>
                <span className="stat-trend positive">+5%</span>
              </div>
              <div className="stat-box">
                <h4>Events</h4>
                <span className="stat-number">24</span>
                <span className="stat-trend negative">-2%</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon" style={{ background: '#E8F1FF' }}>📝</div>
                <div className="activity-content">
                  <p>New meeting minutes posted</p>
                  <time>2 hours ago</time>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{ background: '#E8FFE9' }}>💰</div>
                <div className="activity-content">
                  <p>Monthly dues collected</p>
                  <time>5 hours ago</time>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{ background: '#FFF1E8' }}>🎉</div>
                <div className="activity-content">
                  <p>New event announced</p>
                  <time>1 day ago</time>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h3>Upcoming Events</h3>
            </div>
            <div className="events-list">
              <div className="event-item">
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">JUN</span>
                </div>
                <div className="event-details">
                  <h4>Monthly General Meeting</h4>
                  <p>10:00 AM - Main Hall</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">
                  <span className="day">22</span>
                  <span className="month">JUN</span>
                </div>
                <div className="event-details">
                  <h4>Community Fundraiser</h4>
                  <p>2:00 PM - Community Center</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">
                  <span className="day">28</span>
                  <span className="month">JUN</span>
                </div>
                <div className="event-details">
                  <h4>Executive Board Meeting</h4>
                  <p>4:00 PM - Conference Room</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 