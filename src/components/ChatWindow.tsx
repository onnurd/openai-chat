import React from 'react';
import Message from './Message';
import './ChatWindow.css';

interface ChatWindowProps {
  messages: string[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Message key={index} content={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;
