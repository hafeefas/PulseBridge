import React from 'react';
import '../App.css';

function MeetingsSection() {
  return (
    <section className="meetings-section">
      <div className="meetings-header">
        <h2>Meetings Management</h2>
        <div className="header-actions">
          <button className="icon-button" aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
          <button className="icon-button" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      <div className="meetings-stats">
        <div className="stat-card">
          <h3>12</h3>
          <p>Upcoming Meetings</p>
        </div>
        <div className="stat-card">
          <h3>8</h3>
          <p>This Month</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Average Participation</p>
        </div>
      </div>

      <button className="new-meeting-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        New Meeting
      </button>

      <nav className="meetings-nav" aria-label="Meetings filter">
        <ul>
          <li><button className="active">All</button></li>
          <li><button>In Person</button></li>
          <li><button>Virtual</button></li>
          <li><button>Archives</button></li>
        </ul>
      </nav>

      <div className="meetings-list">
        <article className="meeting-card">
          <div className="meeting-info">
            <h3>Monthly Team Meeting</h3>
            <span className="meeting-tag in-person">In Person</span>
            <div className="meeting-details">
              <time>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>March 15, 2024</span>
                <span>•</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>14:00 - 16:00</span>
              </time>
              <address>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Community Center, Ratoma</span>
              </address>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span>38/45 confirmed</span>
              </p>
            </div>
          </div>
          <button className="view-details-btn">View details</button>
        </article>

        <article className="meeting-card">
          <div className="meeting-info">
            <h3>Construction Project Review</h3>
            <span className="meeting-tag virtual">Virtual</span>
            <div className="meeting-details">
              <time>
                <span>📅 March 18, 2024</span> | <span>⏰ 10:00 - 11:30</span>
              </time>
              <p>
                <span>💻 Zoom Meeting</span>
              </p>
              <p>
                <span>👥 28/32 confirmed</span>
              </p>
            </div>
          </div>
          <button className="view-details-btn">View details</button>
        </article>

        <article className="meeting-card">
          <div className="meeting-info">
            <h3>Leadership Training</h3>
            <span className="meeting-tag hybrid">Hybrid</span>
            <div className="meeting-details">
              <time>
                <span>📅 March 20, 2024</span> | <span>⏰ 15:00 - 17:00</span>
              </time>
              <address>
                <span>📍 Headquarters + Zoom</span>
              </address>
              <p>
                <span>👥 42/50 confirmed</span>
              </p>
            </div>
          </div>
          <button className="view-details-btn">View details</button>
        </article>
      </div>
    </section>
  );
}

function Community() {
  return (
    <div className="page-container">
      <main className="main-content">
        <MeetingsSection />
      </main>
    </div>
  );
}

export default Community; 