import React, { useState, useEffect } from 'react';
import './QuoteGen.css';

const QuoteGen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quotes = [
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    },
    {
      "text": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg"
    },
    {
      "text": "Well begun is half done.",
      "author": "Aristotle"
    },
    {
      "text": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra"
    },
    {
      "text": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster"
    }
  ];

  const getNewQuote = () => {
    const indx = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[indx];
    setQuote(selectedQuote.text);
    setAuthor(selectedQuote.author || "Anonymous");
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="quote-page">
      <div className="quote-container">
      <div className="container">
        <h1>
          <i className="fas fa-quote-left"></i>
          <span className="quote">{quote}</span>
          <i className="fas fa-quote-right"></i>
        </h1>
        <p className="author">~ {author}</p>
        <hr />
        <div className="buttons">
          <button className="next" onClick={getNewQuote}>
            Next quote
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuoteGen;
