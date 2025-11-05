import React, { useState, useEffect } from 'react';
import './FactGen.css';

const FactGen = () => {
  const [fact, setFact] = useState('');

  const facts = [
    {
      "text": "Did you know that the original name of Back To The Future was going to be 'Spaceman from Pluto'?"
    },
    {
      "text": "Did you know that Michael J. Fox was the first choice, but couldn't take the role of Marty at first because he was filming 'Family Ties' at that time?"
    },
    {
      "text": "Did you know that Eric Stoltz was the original Marty, and even filmed part of the movie?"
    },
    {
      "text": "Did you know that the first time traveler in the movie is not Doc Brown, but his dog Einstein?"
    },
    {
      "text": "Did you know that Huey Lewis contributed multiple songs and a cameo appearance in Back to the Future?"
    },
    {
      "text": "Did you know that by the end of 1985 Back to the Future had made over $380 million, making it the highest-grossing film of the year?"
    },
    {
      "text": "Did you know that \"Back to the Future\" was up for four Academy Awards and won the award for best sound effects editing?"
    }
  ];

  const getNewFact = () => {
    const indx = Math.floor(Math.random() * facts.length);
    setFact(facts[indx].text);
  };

  useEffect(() => {
    getNewFact();
  }, []);

  return (
    <div className="fact-container">
      <div className="container">
        <h1>
          <i className="fas fa-lightbulb"></i>
          <span className="fact">{fact}</span>
          <i className="fas fa-lightbulb"></i>
        </h1>
        <hr />
        <div className="buttons">
          <button className="next" onClick={getNewFact}>
            Next Fact
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactGen;
