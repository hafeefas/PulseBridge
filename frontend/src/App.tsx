import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Community from './pages/Community'
import Finance from './pages/Finance'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Calendar from './pages/Calendar'
import OrgChart from './pages/OrgChart'
import Help from './pages/Help'
import Benefits from './pages/Benefits'
import Policy from './pages/Policy'
import ChatHub from './pages/ChatHub'
import Footer from './components/Footer'

// Protected Route wrapper component
function ProtectedRoute({ children, isLoggedIn }: { children: React.ReactNode, isLoggedIn: boolean }) {
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <nav className={isLoggedIn ? "dashboard-nav" : "top-nav"}>
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/" className="logo">PulseBridge</Link>
              {!isLoggedIn && (
                <div className="nav-links">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/community" className="nav-link">Community</Link>
                  <Link to="/finance" className="nav-link">Finance</Link>
                  <Link to="/benefits" className="nav-link">Benefits</Link>
                </div>
              )}
            </div>
            
            {isLoggedIn ? (
              <>
              <div className="nav-content">
                <div className="nav-left">

`              <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/community" className="nav-link">Community</Link>
                <Link to="/finance" className="nav-link">Finance</Link>
                <Link to="/benefits" className="nav-link">Benefits</Link>
              </div>
              </div> </div> 
              <div className="user-menu">
                  <button className="notifications-btn">🔔</button>
                  <Link to="/settings" className="settings-btn">⚙️</Link>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
`              </>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="nav-link login-nav-btn">Login</Link>
                <Link to="/login?mode=signup" className="nav-link signup-nav-btn">Sign Up</Link>
              </div>
            )}
          </div>
        </nav>

        {isLoggedIn && (
          <div className={`main-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar} className="sidebar-toggle-middle">
              {isSidebarOpen ? '◀' : '▶'}
            </button>
            <nav className="sidebar-nav">
              <Link to="/people" className="sidebar-link">
                <span className="sidebar-icon">👥</span>
                <span className="sidebar-text">People</span>
              </Link>
              <Link to="/chat" className="sidebar-link">
                <span className="sidebar-icon">💬</span>
                <span className="sidebar-text">Chat</span>
              </Link>
              <Link to="/calendar" className="sidebar-link">
                <span className="sidebar-icon">📅</span>
                <span className="sidebar-text">Calendar</span>
              </Link>
              {/* <Link to="/checking-account" className="sidebar-link">
                <span className="sidebar-icon">🏦</span>
                Checking Account
              </Link> */}
              <Link to="/forms" className="sidebar-link">
                <span className="sidebar-icon">📄</span>
                <span className="sidebar-text">Forms and Policies</span>
              </Link>
              {/* <Link to="/benefits" className="sidebar-link">
                <span className="sidebar-icon">✨</span>
                Benefits
              </Link> */}
              <Link to="/help" className="sidebar-link">
                <span className="sidebar-icon">❓</span>
                <span className="sidebar-text">Help and Contact</span>
              </Link>
              <Link to="/settings" className="sidebar-link">
                <span className="sidebar-icon">⚙️</span>
                <span className="sidebar-text">Settings</span>
              </Link>
            </nav>
          </div>
        )}

        <div className={`main-content ${isLoggedIn ? (isSidebarOpen ? 'with-sidebar' : 'with-sidebar-closed') : ''}`}>
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/finance" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Finance />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="/calendar" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Calendar />
              </ProtectedRoute>
            } />
            <Route path="/people" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <OrgChart />
              </ProtectedRoute>
            } />
            <Route path="/benefits" element={
              <Benefits />
            } />
            <Route path="/forms" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Policy />
              </ProtectedRoute>
            } />
            <Route path="/help" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Help />
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ChatHub />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {!isLoggedIn && <Footer />}
      </div>
    </Router>
  )
}

export default App
