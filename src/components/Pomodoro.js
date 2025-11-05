import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

const Pomodoro = () => {
  const [remainTime, setRemainTime] = useState(1500); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [totalBreak, setTotalBreak] = useState(4);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (isBreak) {
          setBreakTime(prev => {
            if (prev <= 1) {
              setIsBreak(false);
              setIsRunning(false);
              setBreakTime(300);
              setTotalBreak(prev => prev - 1);
              if (totalBreak === 0) {
                setBreakTime(900); // 15 minutes for long break
                setTotalBreak(4);
              }
              return 300;
            }
            return prev - 1;
          });
        } else {
          setRemainTime(prev => {
            if (prev <= 1) {
              setIsBreak(true);
              setIsRunning(false);
              setRemainTime(1500);
              return 1500;
            }
            return prev - 1;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isBreak, totalBreak]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pomodoro-page">
      <div className="pomodoro-container">
        <div className="img-with-text">
          <img src="/Photos/Pomodoro.png" alt="Study" />
        </div>
        
        <div className="timer-container">
          <div className="timer-title">{isBreak ? "Break Time" : "Study Time"}</div>
          <div className="timer-display">{formatTime(isBreak ? breakTime : remainTime)}</div>
          {!isRunning && (
            <button className="timer-button" onClick={startTimer}>
              Start
            </button>
          )}
        </div>
        
        <div className="img-with-text">
          <img src="/Photos/Pomodoro.png" alt="Focus" />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
