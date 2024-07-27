import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import './Chat.css';
import { fetchOpenAIResponse } from '../services/openaiService';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, `You: ${input}`];
    setMessages(newMessages);
    setInput('');

    const response = await fetchOpenAIResponse(input);
    setMessages([...newMessages, `AI: ${response}`]);
  };

  return (
    <div className="chat">
      <ChatWindow messages={messages} />
      <MessageInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
