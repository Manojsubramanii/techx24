// App.js
import React, { useState } from 'react';
import './App.css'; // Import external CSS file

const LoginPage = () => {
  // State hooks for handling form inputs and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  // Function to handle form validation and login
  const validateLogin = (e) => {
    e.preventDefault();
    if (username === 'Techxadmin' && password === 'techx@24') {
      setErrorMessage('Login successful!');
      setPopupVisible(false);  // Hide popup if login is successful
      // Redirect to another page (you can replace this with a React Router redirect if using react-router)
      window.location.href = "desk.html";  
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  // Function to handle the popup visibility
  const handleLostPasswordClick = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  // Function to copy text to clipboard
  const copyText = (textId, buttonId) => {
    const copyText = document.getElementById(textId).textContent;
    const textArea = document.createElement('textarea');
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copyButton = document.getElementById(buttonId);
    copyButton.textContent = 'Copied';
    setTimeout(() => {
      copyButton.textContent = 'Copy';
    }, 1000);
  };

  return (
    <div className="body">
      <div className="container">
      
        <h2>TECHX ADMIN LOGIN</h2>
        <form onSubmit={validateLogin}>
          <label htmlFor="uname">Username:</label>
          <input
            type="text"
            id="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
          <label htmlFor="psw">Password:</label>
          <input
            type="password"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">Log In</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
        <p><a href="#" onClick={handleLostPasswordClick} className="link">Lost password?</a></p>
      </div>

      {popupVisible && (
        <div className="popup">
          <span className="closeBtn" onClick={closePopup}>X</span>
          <h3>Contact Support</h3>
          <p><strong>Manoj:</strong></p>
          <p id="manoj-number">8825863892</p>
          <button
            id="copy-manoj"
            onClick={() => copyText('manoj-number', 'copy-manoj')}
            className="copyBtn"
          >
            Copy
          </button>

          <p><strong>Honey Joe:</strong></p>
          <p id="honey-number">6382503265</p>
          <button
            id="copy-honey"
            onClick={() => copyText('honey-number', 'copy-honey')}
            className="copyBtn"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

