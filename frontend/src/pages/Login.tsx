import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

interface LocationState {
  from: string;
}

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = (location.state as LocationState)?.from || '/dashboard';
    
    // Check if this is a signup or login
    const isSignUp = location.search.includes('mode=signup');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            if (username && password) {
                onLogin();
                navigate(from);
            } else {
                setError("Please enter a username and password.")
            }
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>PulseBridge</h1>
                <p className="login-subtitle">
                    {isSignUp 
                        ? "Welcome! Create your account to get started"
                        : "Welcome back! Please login to your account."
                    }
                </p>
                
                <form onSubmit={handleLogin} className="login-form">
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-footer">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading 
                            ? (isSignUp ? 'Signing up...' : 'Logging in...') 
                            : (isSignUp ? 'Sign Up' : 'Login')
                        }
                    </button>
                </form>

                <p className="signup-prompt">
                    {isSignUp 
                        ? "Already have an account? " 
                        : "Don't have an account? "
                    }
                    <Link to={isSignUp ? "/login" : "/login?mode=signup"}>
                        {isSignUp ? "Login" : "Sign up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login