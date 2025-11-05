import React, { useState, useEffect } from 'react';
import './Planner.css';

const Planner = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [blocks, setBlocks] = useState({
    block9: { time: "9AM - 10AM", title: "", description: "" },
    block10: { time: "10AM - 11AM", title: "", description: "" },
    block11: { time: "11AM - 12PM", title: "", description: "" },
    block12: { time: "12PM - 1PM", title: "", description: "" },
    block13: { time: "1PM - 2PM", title: "", description: "" },
    block14: { time: "2PM - 3PM", title: "", description: "" },
    block15: { time: "3PM - 4PM", title: "", description: "" },
    block16: { time: "4PM - 5PM", title: "", description: "" }
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Load from localStorage
    const savedBlocks = localStorage.getItem('plannerBlocks');
    if (savedBlocks) {
      setBlocks(JSON.parse(savedBlocks));
    }

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('plannerBlocks', JSON.stringify(blocks));
  }, [blocks]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDay = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  };

  const getCurrentHour = () => {
    return currentTime.getHours();
  };

  const getCurrentMinutes = () => {
    return currentTime.getMinutes();
  };

  const getTimeBlockClass = (blockHour) => {
    const currentHour = getCurrentHour();
    if (currentHour < blockHour) return 'future';
    if (currentHour === blockHour) return 'present';
    return 'past';
  };

  const handleBlockClick = (blockNum) => {
    setSelectedBlock(blockNum);
    setFormData({
      title: blocks[`block${blockNum}`].title,
      description: blocks[`block${blockNum}`].description
    });
    setShowForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (selectedBlock) {
      setBlocks(prev => ({
        ...prev,
        [`block${selectedBlock}`]: {
          ...prev[`block${selectedBlock}`],
          title: formData.title,
          description: formData.description
        }
      }));
    }
    setShowForm(false);
    setSelectedBlock(null);
    setFormData({ title: '', description: '' });
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedBlock(null);
    setFormData({ title: '', description: '' });
  };

  const getCurrentTimePosition = () => {
    const currentHour = getCurrentHour();
    const currentMinutes = getCurrentMinutes();
    
    if (currentHour < 9 || currentHour > 17) {
      return { display: 'none' };
    }
    
    const position = ((currentHour * 100) - 802) + (currentMinutes * 1.65);
    return { 
      display: 'grid',
      top: `${position}px`
    };
  };

  const timeBlocks = [
    { hour: 9, label: '9AM' },
    { hour: 10, label: '10AM' },
    { hour: 11, label: '11AM' },
    { hour: 12, label: '12PM' },
    { hour: 13, label: '1PM' },
    { hour: 14, label: '2PM' },
    { hour: 15, label: '3PM' },
    { hour: 16, label: '4PM' }
  ];

  return (
    <div className="planner-page">
      <div className="planner-container">
      {/* Current time line */}
      <div className="container">
        <div id="current-time" className="grid-container" style={getCurrentTimePosition()}>
          <hr id="current-line" />
          <span id="triangle"></span>
        </div>
      </div>

      {/* Header */}
      <header className="container-fluid position-fixed">
        <div id="header-content" className="container">
          <div className="grid-container">
            <h1 id="day-display">{formatDay(currentTime)}</h1>
            <div id="time-display" className="text-align-right">
              <h1 id="time-digits" className="d-inline">
                {formatTime(currentTime).split(' ')[0]}
              </h1>
              <h3 id="time-period" className="d-inline">
                {formatTime(currentTime).split(' ')[1]}
              </h3>
            </div>
          </div>
        </div>
      </header>

      {/* Time blocks */}
      <main>
        <div id="timeblocks">
          <div className="container">
            {timeBlocks.map((block, index) => (
              <div key={block.hour} className="grid-container">
                <p className="side-time">{block.label}</p>
                <div
                  id={block.hour}
                  className={`time-block ${getTimeBlockClass(block.hour)} ${
                    blocks[`block${block.hour}`].title || blocks[`block${block.hour}`].description ? '' : 'empty'
                  }`}
                  data-value={block.hour}
                  onClick={() => handleBlockClick(block.hour)}
                >
                  {blocks[`block${block.hour}`].title && (
                    <h4 className="title">{blocks[`block${block.hour}`].title}</h4>
                  )}
                  {blocks[`block${block.hour}`].description && (
                    <p className="description">{blocks[`block${block.hour}`].description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div id="text-form">
            <div className="d-flex justify-content-between">
              <button id="close" onClick={handleClose}>X</button>
              <button type="submit" id="save" onClick={handleSave}>SAVE</button>
            </div>
            <h3 id="form-time">
              {selectedBlock && blocks[`block${selectedBlock}`].time}
            </h3>
            <form id="myform">
              <hr className="line" />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Event title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
              <hr className="line" />
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Event description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
              <hr className="line" />
            </form>
          </div>
        )}
      </main>
      </div>
    </div>
  );
};

export default Planner;
