import React from 'react';
import '../App.css';

const Finance: React.FC = () => {
  const getProgressClass = (percentage: number) => {
    if (percentage < 40) return 'low';
    if (percentage <= 75) return 'medium';
    return 'high';
  };

  const recentContributions = [
    {
      name: "Mamadou Baldé",
      amount: "350,000 GNF",
      date: "Today, 10:30",
      status: "Paid"
    },
    {
      name: "Fatoumata Bah",
      amount: "350,000 GNF",
      date: "Yesterday, 15:45",
      status: "Paid"
    },
    {
      name: "Ibrahim Sow",
      amount: "350,000 GNF",
      date: "Mar 02, 09:00",
      status: "Paid"
    },
    {
      name: "Aissatou Diallo",
      amount: "350,000 GNF",
      date: "Mar 01, 14:20",
      status: "Paid"
    },
    {
      name: "Thierno Barry",
      amount: "350,000 GNF",
      date: "Feb 28, 11:15",
      status: "Paid"
    },
    {
      name: "Mariama Sow",
      amount: "350,000 GNF",
      date: "Feb 27, 16:30",
      status: "Paid"
    },
    {
      name: "Ousmane Diallo",
      amount: "350,000 GNF",
      date: "Feb 27, 09:45",
      status: "Paid"
    },
    {
      name: "Kadiatou Barry",
      amount: "350,000 GNF",
      date: "Feb 26, 13:20",
      status: "Paid"
    },
    {
      name: "Alpha Baldé",
      amount: "350,000 GNF",
      date: "Feb 26, 10:05",
      status: "Paid"
    },
    {
      name: "Fanta Touré",
      amount: "350,000 GNF",
      date: "Feb 25, 15:40",
      status: "Paid"
    }
  ];

  return (
    <div className="finance-page">
      <div className="finance-header">
        <div className="header-content">
          <h1>Financial Dashboard</h1>
          <div className="stats-overview">
            <div className="stat-card2">
              <span className="stat-number2">432/626</span>
              <span className="stat-label">Payments Received</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="stat-subtitle">Out of 626 members</span>
            </div>
            <div className="stat-card2">
              <span className="stat-number2">14</span>
              <span className="stat-label">Pending Payments</span>
              <div className="progress-bar">
                <div className="progress warning" style={{ width: '25%' }}></div>
              </div>
              <span className="stat-subtitle">Verification in progress</span>
            </div>
            <div className="stat-card2">
              <span className="stat-number2">87%</span>
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
                <span>Total Budget: 5,600,000 GNF</span>
                <span>Collected: 4,200,000 GNF</span>
              </div>
              <div className="progress-bar">
                <div className={`progress ${getProgressClass(95)}`} style={{ width: '95%' }}></div>
              </div>
              <span className="progress-text">95% Complete</span>
            </div>
            <div className="project-card">
              <h3>Youth Development Program</h3>
              <span className="project-type">Education</span>
              <div className="project-details">
                <span>Total Budget: 3,500,000 GNF</span>
                <span>Collected: 2,450,000 GNF</span>
              </div>
              <div className="progress-bar">
                <div className={`progress ${getProgressClass(30)}`} style={{ width: '30%' }}></div>
              </div>
              <span className="progress-text">30% Complete</span>
            </div>
            <div className="project-card">
              <h3>Healthcare Initiative</h3>
              <span className="project-type">Health</span>
              <div className="project-details">
                <span>Total Budget: 4,000,000 GNF</span>
                <span>Collected: 3,600,000 GNF</span>
              </div>
              <div className="progress-bar">
                <div className={`progress ${getProgressClass(90)}`} style={{ width: '90%' }}></div>
              </div>
              <span className="progress-text">90% Complete</span>
            </div>
            <div className="project-card">
              <h3>Women Empowerment Fund</h3>
              <span className="project-type">Social</span>
              <div className="project-details">
                <span>Total Budget: 3,200,000 GNF</span>
                <span>Collected: 2,880,000 GNF</span>
              </div>
              <div className="progress-bar">
                <div className={`progress ${getProgressClass(50)}`} style={{ width: '50%' }}></div>
              </div>
              <span className="progress-text">50% Complete</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Recent Contributions</h2>
            <button className="view-all">View All</button>
          </div>
          <div className="contributions-list">
            {recentContributions.map((contribution, index) => (
              <div key={index} className="contribution-item">
                <div className="contribution-info">
                  <div className="contributor-name">{contribution.name}</div>
                  <div className="contribution-date">{contribution.date}</div>
                </div>
                <div className="contribution-amount">
                  <div className="amount">{contribution.amount}</div>
                  <div className="status">{contribution.status}</div>
                </div>
              </div>
            ))}
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