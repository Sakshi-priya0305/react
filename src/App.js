import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<QuoteGen />} />
          <Route path="/facts" element={<FactGen />} />

          {/* Previously private, now open */}
          <Route path="/planner" element={<Planner />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/notes" element={<Notes />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;




