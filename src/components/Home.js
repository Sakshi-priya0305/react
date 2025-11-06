import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer1 = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % 9); // 9 slides for main carousel
    }, 2000);

    return () => clearInterval(timer1);
  }, []);

  const publicBase = process.env.PUBLIC_URL || '';
  const quotes = [
    { src: `${publicBase}/Photos/Quotes/1.png` },
    { src: `${publicBase}/Photos/Quotes/2.png` },
    { src: `${publicBase}/Photos/Quotes/3.png` },
    { src: `${publicBase}/Photos/Quotes/4.png` },
    { src: `${publicBase}/Photos/Quotes/5.png` },
    { src: `${publicBase}/Photos/Quotes/6.png` },
    { src: `${publicBase}/Photos/Quotes/7.png` },
    { src: `${publicBase}/Photos/Quotes/8.png` },
    { src: `${publicBase}/Photos/Quotes/9.png` },
    { src: `${publicBase}/Photos/Quotes/10.png` }
  ];

  const facts = [
    { src: `${publicBase}/Photos/Facts/1.png` },
    { src: `${publicBase}/Photos/Facts/2.png` },
    { src: `${publicBase}/Photos/Facts/3.png` },
    { src: `${publicBase}/Photos/Facts/4.png` },
    { src: `${publicBase}/Photos/Facts/5.png` },
    { src: `${publicBase}/Photos/Facts/6.png` },
    { src: `${publicBase}/Photos/Facts/7.png` }
  ];

  const features = [
    { src: `${publicBase}/Photos/Planner.png`, title: "Daily Planner" },
    { src: `${publicBase}/Photos/Pomodoro.png`, title: "Pomodoro Timer" },
    { src: `${publicBase}/Photos/Quiz.png`, title: "Quizzes" },
    { src: `${publicBase}/Photos/Flashcard.png`, title: "Flashcards" },
    { src: `${publicBase}/Photos/ToDoList.png`, title: "To-Do List" },
    { src: `${publicBase}/Photos/Notes.png`, title: "Make your own Notes" },
    { src: `${publicBase}/Photos/Calculator.png`, title: "Calculator" },
    { src: `${publicBase}/Photos/Quote.png`, title: "Motivational Quotes" },
    { src: `${publicBase}/Photos/Fact.png`, title: "Fun Facts" }
  ];

  return (
    <div>
      {/* Header content with banner image */}
      <div className="row">
        <div className="column1">
          <h1 id="heading">SkolarKit</h1>
          <h2>Simplify Your Studies With Our Tools</h2>
          <p>ScholarKit is an educational tool website designed to help students achieve their learning goals with ease. Sign up now and start exploring ScholarKit's vast collection of educational tools and resources!</p>
          <p>Revolutionize your learning experience with ScholarKit!</p>
          <button>Sign Up</button>
        </div>
        <div className="column2">
          <img src="https://i.pinimg.com/564x/f8/6f/cc/f86fcc6a326da96e5e5dcd7489d9c85f.jpg" alt="banner" width="500px" />
        </div>
      </div>

      <div className="heading">
        <h1>Why choose ScholarKit?</h1>
        <p>ScholarKit is a one-stop solution for all your educational needs. With an extensive collection of tools and resources, we aim to provide personalized and effective learning experiences for students and educators alike. Our platform is designed with a user-friendly interface that is easy to navigate, making it accessible for users of all ages and skill levels.</p>
      </div>

      {/* Features description */}
      <div className="heading">
        <h1 id="features">ScholarKit Features</h1>
        <p>Let ScholarKit take you on a wild ride to learning opportunities where you don't need roads to go to.</p>
      </div>

      {/* Planner */}
      <div className="containerRight">
        <div className="photo">
          <img src={`${publicBase}/Photos/Planner.png`} alt="Planner" />
        </div>
        <div className="text">
          <h2 id="planner">Plan your day ahead</h2>
          <p>Our daily planner feature will help you keep track of all your classes, assignments, and extracurricular activities, just like Doc Brown's trusty DeLorean time machine.</p>
          <button type="button" onClick={() => navigate('/planner')}>Try It</button>
        </div>
      </div>

      {/* Pomodoro Timer */}
      <div className="containerLeft">
        <div className="text">
          <h2 id="pomodoro">Work with a pomodoro timer</h2>
          <p>Use our Pomodoro timer to keep yourself focused and energized, just like Marty McFly racing against the clock to get back to the future.</p>
          <button type="button" onClick={() => navigate('/pomodoro')}>Try It</button>
        </div>
        <div className="photo">
          <img src={`${publicBase}/Photos/Pomodoro.png`} alt="Pomodoro" />
        </div>
      </div>

      {/* Quiz */}
      <div className="containerRight">
        <div className="photo">
          <img src={`${publicBase}/Photos/Quiz.png`} alt="Quiz" />
        </div>
        <div className="text">
          <h2 id="quiz">Take some quizzes</h2>
          <p>Our quizzes feature will test your knowledge and challenge you to go beyond your limits. Think of it as a flux capacitor for your brain!</p>
          <button type="button" onClick={() => navigate('/quiz')}>Try It</button>
        </div>
      </div>

      {/* Flashcards */}
      <div className="containerLeft">
        <div className="text">
          <h2 id="flash">Make your own flashcards</h2>
          <p>Flashcards are a great way to memorize key concepts and terms, just like the time circuits in the DeLorean that help navigate through different eras.</p>
          <button type="button" onClick={() => navigate('/flashcards')}>Try It</button>
        </div>
        <div className="photo">
          <img src={`${publicBase}/Photos/Flashcard.png`} alt="Flashcards" />
        </div>
      </div>

      {/* To-Do List */}
      <div className="containerRight">
        <div className="photo">
          <img src={`${publicBase}/Photos/ToDoList.png`} alt="To-Do" />
        </div>
        <div className="text">
          <h2 id="todo">Complete your to-do list</h2>
          <p>With our to-do list feature, you can make sure you're on top of all your tasks, like Marty making sure he doesn't mess up the timeline.</p>
          <button type="button" onClick={() => navigate('/todo')}>Try It</button>
        </div>
      </div>

      {/* Notes */}
      <div className="containerLeft">
        <div className="text">
          <h2 id="notes">Jot down some quick notes</h2>
          <p>Take notes on our platform to keep track of all your ideas and discoveries, just like Doc Brown scribbling down his groundbreaking inventions.</p>
          <button type="button" onClick={() => navigate('/notes')}>Try It</button>
        </div>
        <div className="photo">
          <img src={`${publicBase}/Photos/Notes.png`} alt="Notes" />
        </div>
      </div>

      {/* Calculator */}
      <div className="containerRight">
        <div className="photo">
          <img src={`${publicBase}/Photos/Calculator.png`} alt="Calculator" />
        </div>
        <div className="text">
          <h2 id="calculator">Calculator</h2>
          <p>Need to do some quick calculations? Our calculator feature is here to help you out, just like the plutonium-powered Mr. Fusion that powers the DeLorean.</p>
          <button type="button" onClick={() => navigate('/calculator')}>Try It</button>
        </div>
      </div>

      {/* Quotes */}
      <div className="containerLeft">
        <div className="text">
          <h2 id="quotes">Motivate Yourself</h2>
          <p>Get inspired by the wisdom of Doc Brown and Marty McFly with our random quote generator. You never know what words of wisdom you'll get, just like you never know where the DeLorean will take you!</p>
          <button type="button" onClick={() => navigate('/quotes')}>Try It</button>
        </div>
        <div className="photo">
          <img src={`${publicBase}/Photos/Quote.png`} alt="Quotes" />
        </div>
      </div>

      {/* Quotes Slideshow */}
      <div className="slideshow-container">
        {quotes.map((quote, index) => (
          <div key={index} className={`mySlides2 fade ${index === slideIndex % quotes.length ? 'active' : ''}`} style={{ display: index === slideIndex % quotes.length ? 'block' : 'none' }}>
            <img src={quote.src} style={{ height: '50%', width: '50%' }} alt={`Quote ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Facts */}
      <div className="containerRight">
        <div className="photo">
          <img src={`${publicBase}/Photos/Fact.png`} alt="Facts" />
        </div>
        <div className="text">
          <h2 id="facts">Increase Your Knowledge</h2>
          <p>Expand your knowledge and impress your friends with our random fact generator about Back to the Future. Learn cool behind-the-scenes facts about the making of the movie, just like Doc and Marty learned the ins and outs of the time travel!</p>
          <button type="button" onClick={() => navigate('/facts')}>Try It</button>
        </div>
      </div>

      {/* Facts Slideshow */}
      <div className="slideshow-container">
        {facts.map((fact, index) => (
          <div key={index} className={`mySlides3 fade ${index === slideIndex % facts.length ? 'active' : ''}`} style={{ display: index === slideIndex % facts.length ? 'block' : 'none' }}>
            <img src={fact.src} style={{ height: '50%', width: '50%' }} alt={`Fact ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* All Features Carousel */}
      <div className="heading">
        <p>All Features at a Glance</p>
      </div>
      <div className="slideshow-container">
        {features.map((feature, index) => (
          <div key={index} className={`mySlides1 fade ${index === slideIndex ? 'active' : ''}`} style={{ display: index === slideIndex ? 'block' : 'none' }}>
            <img src={feature.src} style={{ width: '100%' }} alt={feature.title} />
            <div className="textslide">{feature.title}</div>
          </div>
        ))}
      </div>

      <footer className="background">
        <p className="footer">©Copyright 2023. AI Angel. All rights Reserved</p>
        <p className="footer">Created and Designed with love by Anandita Chaudhary</p>
      </footer>
    </div>
  );
};

export default Home;




