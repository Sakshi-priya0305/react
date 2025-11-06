import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';

import Home from './components/Home';
import Pomodoro from './components/Pomodoro';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import Notes from './components/Notes';
import Calculator from './components/Calculator';
import QuoteGen from './components/QuoteGen';
import FactGen from './components/FactGen';
import ToDoList from './components/ToDoList';
import Planner from './components/Planner';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<QuoteGen />} />
            <Route path="/facts" element={<FactGen />} />

            {/* Private routes */}
            <Route path="/planner" element={
              <ProtectedRoute>
                <Planner />
              </ProtectedRoute>
            } />
            <Route path="/flashcards" element={
              <ProtectedRoute>
                <Flashcards />
              </ProtectedRoute>
            } />
            <Route path="/todo" element={
              <ProtectedRoute>
                <ToDoList />
              </ProtectedRoute>
            } />
            <Route path="/notes" element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            } />

            {/* Not Found */}
            <Route path="*" element={<div style={{ padding: 24 }}>404 - Page not found</div>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;




