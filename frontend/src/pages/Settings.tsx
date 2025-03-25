import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-sidebar">
          <h2>Settings</h2>
          <div className="settings-nav">
            <button 
              className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`settings-tab ${activeTab === 'password' ? 'active' : ''}`}
              onClick={() => setActiveTab('password')}
            >
              Manage Password
            </button>
            <button 
              className={`settings-tab ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Checking Account
            </button>
          </div>
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h2>Profile</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Update Name</label>
                  <input type="text" defaultValue="Albert Ron" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Organization</label>
                  <input type="text" defaultValue="PulseBridge" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue="RonAlbert@aol.com" className="form-input" />
                </div>
              </div>
              <button className="save-btn" style={{marginTop:"20px"}}>Update Profile</button>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="settings-section">
              <h2>Manage Password</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" className="form-input" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" className="form-input" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-input" placeholder="Confirm new password" />
                </div>
                <button className="save-btn">Update Password</button>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="settings-section">
              <h2>Checking Account</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Bank Name</label>
                  <input type="text" defaultValue="Bank of America" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Account Number</label>
                  <input type="text" defaultValue="****-****-4321" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Routing Number</label>
                  <input type="text" defaultValue="****-****-8765" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Account Type</label>
                  <input type="text" defaultValue="Checking" className="form-input" />
                </div>
                <button className="save-btn">Update Bank Information</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings; 