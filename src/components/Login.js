import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="notes-page">
      <div className="notes-container" style={{ maxWidth: 420, marginTop: 60 }}>
        <h2 style={{ color: '#fff', marginBottom: 16 }}>Login</h2>
        {error && (
          <div style={{ background: '#fff', padding: 12, borderRadius: 6, marginBottom: 12, color: '#c00' }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
          <div className="row">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="row">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" style={{ marginTop: 10 }}>Login</button>
        </form>
        <button onClick={async () => {
          try {
            await loginWithGoogle();
            navigate(from, { replace: true });
          } catch (err) {
            setError(err.message || 'Google sign-in failed');
          }
        }} style={{ marginTop: 10, width: '100%', padding: 12, borderRadius: 6 }}>
          Continue with Google
        </button>
        <p style={{ color: '#fff', marginTop: 12 }}>
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

