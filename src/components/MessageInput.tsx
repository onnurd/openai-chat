import React from 'react';
import './MessageInput.css';

interface MessageInputProps {
  input: string;
  setInput: (input: string) => void;
  sendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ input, setInput, sendMessage }) => {
  return (
    <div className="input-container">
      <button className="icon-button"><i className="fas fa-paperclip"></i></button>
      <input
        type="text"
        value={input}
        placeholder="Message ChatGPT"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
      />
      <button className="send-button" onClick={sendMessage}><i className="fas fa-paper-plane"></i></button>
    </div>
  );
}

export default MessageInput;
