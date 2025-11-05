import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Navigation = ({ currentPage, onNavigate }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { user, logout } = useAuth();

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    closeNav();
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/"><img src="/logoFinale.png" alt="ScholarKit" className="logo" /></Link>
        </div>
        <span className="menubtn" onClick={openNav}>&#9776;</span>

        <div className="navLinks">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <div className="dropdown">
                <a>Features</a>
                <div className="dropdown-content">
                  <Link to="/planner">Daily Planner</Link>
                  <Link to="/pomodoro">Pomodoro Timer</Link>
                  <Link to="/quiz">Quiz</Link>
                  <Link to="/flashcards">Flashcards</Link>
                  <Link to="/todo">To-Do List</Link>
                  <Link to="/calculator">Calculator</Link>
                  <Link to="/notes">Notes</Link>
                  <Link to="/quotes">Quotes</Link>
                  <Link to="/facts">Facts</Link>
                </div>
              </div>
            </li>
            {user ? (
              <>
                <li><span style={{ color: '#fff', fontSize: 16 }}>Hi, {user.email}</span></li>
                <button type="button" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Responsive side navbar */}
      <div className="sideNav" style={{ width: isSideNavOpen ? '50%' : '0%' }}>
        <a className="closeBtn" onClick={closeNav}>&#10006;</a>
        <Link to="/" onClick={closeNav}>Home</Link>
        <Link to="/planner" onClick={closeNav}>Daily Planner</Link>
        <Link to="/pomodoro" onClick={closeNav}>Pomodoro</Link>
        <Link to="/quiz" onClick={closeNav}>Quiz</Link>
        <Link to="/flashcards" onClick={closeNav}>Flashcards</Link>
        <Link to="/todo" onClick={closeNav}>To-Do</Link>
        <Link to="/calculator" onClick={closeNav}>Calculator</Link>
        <Link to="/notes" onClick={closeNav}>Notes</Link>
        <Link to="/quotes" onClick={closeNav}>Quotes</Link>
        <Link to="/facts" onClick={closeNav}>Facts</Link>
        <a><button type="button">Login</button></a>
      </div>
    </>
  );
};

export default Navigation;
