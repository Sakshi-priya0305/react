import React, { useState } from 'react';
import './Flashcards.css';

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddCard = () => {
    setShowAddForm(true);
    setQuestion('');
    setAnswer('');
    setError('');
    setEditingIndex(-1);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setQuestion('');
    setAnswer('');
    setError('');
    setEditingIndex(-1);
  };

  const handleSaveCard = () => {
    if (!question.trim() || !answer.trim()) {
      setError('Input fields cannot be empty!');
      return;
    }

    if (editingIndex >= 0) {
      // Edit existing card
      const updatedCards = [...cards];
      updatedCards[editingIndex] = { question: question.trim(), answer: answer.trim() };
      setCards(updatedCards);
    } else {
      // Add new card
      setCards([...cards, { question: question.trim(), answer: answer.trim() }]);
    }

    handleCloseForm();
  };

  const handleEditCard = (index) => {
    const card = cards[index];
    setQuestion(card.question);
    setAnswer(card.answer);
    setEditingIndex(index);
    setShowAddForm(true);
    setError('');
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="flashcards-page">
      <div className="flashcards-container">
        <div className="container">
          <div className="add-flashcard-con">
            <button id="add-flashcard" onClick={handleAddCard}>
              Add Flashcard
            </button>
          </div>

          {/* Display Cards */}
          <div id="card-con">
            <div className="card-list-container">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  question={card.question}
                  answer={card.answer}
                  onEdit={() => handleEditCard(index)}
                  onDelete={() => handleDeleteCard(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="question-container" id="add-question-card">
            <h2>{editingIndex >= 0 ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
            <div className="wrapper">
              <div className="error-con">
                <span className={error ? 'error' : 'hide'}>{error}</span>
              </div>
              <i className="fa-solid fa-xmark" id="close-btn" onClick={handleCloseForm}></i>
            </div>

            <label htmlFor="question">Question:</label>
            <textarea
              className="input"
              id="question"
              placeholder="Type the question here..."
              rows="2"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <label htmlFor="answer">Answer:</label>
            <textarea
              className="input"
              id="answer"
              rows="4"
              placeholder="Type the answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button id="save-btn" onClick={handleSaveCard}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ question, answer, onEdit, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card">
      <p className="question-div">{question}</p>
      <a
        href="#"
        className="show-hide-btn"
        onClick={(e) => {
          e.preventDefault();
          setShowAnswer(!showAnswer);
        }}
      >
        Show/Hide
      </a>
      {showAnswer && <p className="answer-div">{answer}</p>}
      <div className="buttons-con">
        <button className="edit" onClick={onEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="delete" onClick={onDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
