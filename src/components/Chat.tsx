import React, { useState } from 'react';
import './Chat.css';

interface ChatProps {
  messages: string[];
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.startsWith('User:') ? 'user' : 'ai'}`}>
            <div className="message-content">{msg.replace(/^User: |^AI: /, '')}</div>
          </div>
        ))}
      </div>
      <div className="input-bar-container">
        <div className="input-bar">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message ChatGPT"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      <div className="footer-text">
        ChatGPT can make mistakes. Check important info.
      </div>
    </div>
  );
};

export default Chat;
