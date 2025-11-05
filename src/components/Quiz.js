import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText: "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText: "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

  const [timer, setTimer] = useState(50);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [showHighScores, setShowHighScores] = useState(false);
  const [result, setResult] = useState('');
  const [initials, setInitials] = useState('');

  useEffect(() => {
    let interval;
    if (isQuizStarted && !isQuizFinished && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer <= 0 && isQuizStarted) {
      setIsQuizFinished(true);
    }
    return () => clearInterval(interval);
  }, [isQuizStarted, isQuizFinished, timer]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setTimer(50);
    setQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
    setResult('');
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (questions[questionIndex].answer === selectedAnswer) {
      setResult('Correct!');
      setScore(prev => prev + 10);
    } else {
      setResult('Incorrect!');
      setTimer(prev => Math.max(0, prev - 10));
    }

    if (questionIndex + 1 >= questions.length) {
      setIsQuizFinished(true);
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const submitScore = () => {
    if (!initials.trim()) {
      alert('Please enter Initials first');
      return;
    }

    const highScores = JSON.parse(localStorage.getItem('scores') || '{}');
    const prevHighScore = highScores[initials.toUpperCase()];
    if (!prevHighScore || prevHighScore < score) {
      highScores[initials.toUpperCase()] = score;
      localStorage.setItem('scores', JSON.stringify(highScores));
    }
    setInitials('');
    resetQuiz();
  };

  const resetQuiz = () => {
    setIsQuizStarted(false);
    setIsQuizFinished(false);
    setQuestionIndex(0);
    setScore(0);
    setTimer(50);
    setResult('');
    setShowHighScores(false);
  };

  const clearHighScores = () => {
    localStorage.removeItem('scores');
    alert('HighScores Cleared!! Play quiz to make new high scores😁😁');
    setShowHighScores(false);
  };

  const getHighScores = () => {
    const scores = JSON.parse(localStorage.getItem('scores') || '{}');
    return Object.entries(scores).sort(([,a], [,b]) => b - a);
  };

  if (showHighScores) {
    const highScores = getHighScores();
    return (
      <div className="quiz-container">
        <header>
          <nav>
            <a onClick={() => setShowHighScores(false)}>
              Go Back <i className="fas fa-hand-point-left fa-lg"></i>
            </a>
            <div id="time">Time: {timer}</div>
          </nav>
        </header>
        <main className="box">
          <h2 className="title">Highscores</h2>
          <ol style={{ marginLeft: '3rem' }}>
            {highScores.map(([name, score], index) => (
              <li key={index}>{name} - {score}</li>
            ))}
          </ol>
          <div style={{ marginTop: '1rem' }}>
            <button className="action-btn" onClick={() => setShowHighScores(false)}>
              Go Back
            </button>
            <button className="action-btn" onClick={clearHighScores}>
              Clear Highscores
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (isQuizFinished) {
    return (
      <div className="quiz-container">
        <header>
          <nav>
            <a onClick={() => setShowHighScores(true)}>
              View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
            </a>
            <div id="time">Time: {timer}</div>
          </nav>
        </header>
        <main className="box">
          <h2 className="title">All Done!</h2>
          <p className="description">Your final score is {score}.</p>
          <div className="row">
            <label htmlFor="initials">Enter Initials: </label>
            <input
              type="text"
              name="initials"
              id="initials"
              value={initials}
              onChange={(e) => setInitials(e.target.value.toUpperCase())}
            />
            <button className="action-btn" onClick={submitScore}>
              Submit
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (!isQuizStarted) {
    return (
      <div className="quiz-container">
        <header>
          <nav>
            <a onClick={() => setShowHighScores(true)}>
              View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
            </a>
            <div id="time">Time: {timer}</div>
          </nav>
        </header>
        <main className="box">
          <h2 className="title">Coding Quiz Challenge</h2>
          <div className="description">
            <p>Try to answer the following code-related questions within the time limit.</p>
            <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
          </div>
          <button className="action-btn" onClick={startQuiz}>
            Start Quiz
          </button>
          <p id="result">{result}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
      <header>
        <nav>
          <a onClick={() => setShowHighScores(true)}>
            View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
          </a>
          <div id="time">Time: {timer}</div>
        </nav>
      </header>
      <main className="box">
        <h2 className="title">{questions[questionIndex].questionText}</h2>
        <div className="options">
          {questions[questionIndex].options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <p id="result">{result}</p>
      </main>
      </div>
    </div>
  );
};

export default Quiz;
