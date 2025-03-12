import React from 'react';
import '../App.css';

const Finance: React.FC = () => {
  return (
    <div className="finance-page">
      <div className="finance-header">
        <div className="header-content">
          <h1>Financial Dashboard</h1>
          <div className="stats-overview">
            <div className="stat-card">
              <span className="stat-number">42</span>
              <span className="stat-label">Payments Received</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="stat-subtitle">Out of 56 members</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">14</span>
              <span className="stat-label">Pending Payments</span>
              <div className="progress-bar">
                <div className="progress warning" style={{ width: '25%' }}></div>
              </div>
              <span className="stat-subtitle">Verification in progress</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">87%</span>
              <span className="stat-label">Success Rate</span>
              <div className="progress-bar">
                <div className="progress success" style={{ width: '87%' }}></div>
              </div>
              <span className="stat-subtitle">Overall performance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="finance-content">
        <div className="section">
          <div className="section-header">
            <h2>Active Projects</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="project-list">
            <div className="project-card">
              <h3>Annual Membership Drive</h3>
              <span className="project-type">Membership</span>
              <div className="project-details">
                <span>Total Budget: $5,600</span>
                <span>Collected: $4,200</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="progress-text">75% Complete</span>
            </div>
            <div className="project-card">
              <h3>Community Event Fund</h3>
              <span className="project-type">Events</span>
              <div className="project-details">
                <span>Total Budget: $2,800</span>
                <span>Collected: $2,100</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="progress-text">75% Complete</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Priority Tasks</h2>
          </div>
          <div className="task-list">
            <div className="task-item">
              <div className="task-content">
                <h4>Follow up on pending payments</h4>
                <p>14 members pending</p>
              </div>
              <span className="task-due today">Today</span>
            </div>
            <div className="task-item">
              <div className="task-content">
                <h4>Monthly financial report</h4>
                <p>For March 2024</p>
              </div>
              <span className="task-due tomorrow">Tomorrow</span>
            </div>
            <div className="task-item">
              <div className="task-content">
                <h4>Budget planning meeting</h4>
                <p>Q2 2024</p>
              </div>
              <span className="task-due">Next Week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance; 