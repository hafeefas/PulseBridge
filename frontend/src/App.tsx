import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Community from './pages/Community'
import Finance from './pages/Finance'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <nav className={isLoggedIn ? "dashboard-nav" : "top-nav"}>
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/" className="logo">PulseBridge</Link>
              <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/community" className="nav-link">Community</Link>
                <Link to="/finance" className="nav-link">Finance</Link>
              </div>
            </div>
            
            {isLoggedIn ? (
              <div className="user-menu">
                <button className="notifications-btn">🔔</button>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="nav-link login-nav-btn">Login</Link>
                <Link to="/login?mode=signup" className="nav-link signup-nav-btn">Sign Up</Link>
              </div>
            )}
          </div>
        </nav>

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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
