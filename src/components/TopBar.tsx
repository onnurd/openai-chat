import React, { useState } from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const buttons = [
    { text: 'Log in', className: 'login-button' },
    { text: 'Sign up', className: 'signup-button' }
  ];

  return (
    <div className="top-bar">
      <div className="logo-title-container" onClick={toggleDropdown}>
        <div className="title-container">
          <div className="title">
            ChatGPT 4o mini <span className="dropdown-arrow">&#9662;</span>
          </div>
        </div>
      </div>
      {dropdownVisible && (
        <div className="dropdown-menu">
          <div className="dropdown-header">Log in to try our latest model</div>
          <div className="dropdown-content">
            Get smarter responses, upload files, analyze images, and browse the web with our latest model.
          </div>
          <div className="dropdown-buttons">
            {buttons.map((button, index) => (
              <button key={index} className={button.className}>{button.text}</button>
            ))}
          </div>
        </div>
      )}
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} className={button.className}>{button.text}</button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
