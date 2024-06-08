import React, { useState } from 'react';
import './App.css';
import TopBar from './TopBar';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import FunctionalComponent from './FunctionalComponent';
import styles from './FucntionalComponent.module.css';


function App() {
  
  const userName = "Aarti Arora";


  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);

  const toggleWelcomeMessage = () => {
    setShowWelcomeMessage(!showWelcomeMessage);
  };
  const incrementThumbsUp = () => {
    setThumbsUpCount(thumbsUpCount + 1); // Update the thumbs up count state
  };
  const incrementThumbsDown = () => {
    setThumbsDownCount(thumbsDownCount + 1); // Update the thumbs down count state
  };

  return (
    <div className="App">
      <TopBar userName={userName} />
      {showWelcomeMessage && (
        <div className="welcome-message">
          <h2>Welcome to Food Delight, {userName}!</h2>
          <button onClick={toggleWelcomeMessage}>Hide Welcome Message</button>
        </div>
        
      )}
      <div className="rating-section">
        <h2>Rate this blog:</h2>
        <button onClick={incrementThumbsUp}>👍 Thumbs Up ({thumbsUpCount})</button>
        <button onClick={incrementThumbsDown}>👎 Thumbs Down ({thumbsDownCount})</button>
      </div>

      <BlogPost1 />

      <BlogPost2 />
     
    </div>
  );
}

export default App;