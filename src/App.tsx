import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from './components/Chat';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import { loadChats, saveChats } from './utils/localStorage';
import { fetchOpenAIResponse } from './services/openaiService';

interface Chat {
  title: string;
  messages: string[];
}

const App: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [chats, setChats] = useState<{ [key: string]: Chat }>({});

  useEffect(() => {
    const savedChats = loadChats();
    setChats(savedChats);
  }, []);

  useEffect(() => {
    saveChats(chats);
  }, [chats]);

  const handleChatClick = (index: number) => {
    setActiveChat(index);
  };

  const addNewChat = () => {
    const newChatIndex = Object.keys(chats).length.toString();
    setChats((prevChats) => ({
      ...prevChats,
      [newChatIndex]: { title: `Chat ${Object.keys(chats).length + 1}`, messages: [] },
    }));
    setActiveChat(parseInt(newChatIndex));
  };

  const sendMessage = async (message: string) => {
    let currentChat = activeChat;

    if (currentChat === null) {
      currentChat = 0;
      const newChatIndex = currentChat.toString();
      setChats((prevChats) => ({
        ...prevChats,
        [newChatIndex]: { title: message, messages: [`User: ${message}`] },
      }));
      setActiveChat(currentChat);
    } else {
      const chatKey = currentChat.toString();
      const updatedChats = {
        ...chats,
        [chatKey]: {
          title: chats[chatKey].title === `Chat ${currentChat + 1}` ? message : chats[chatKey].title,
          messages: [...chats[chatKey].messages, `User: ${message}`],
        },
      };

      setChats(updatedChats);
    }

    try {
      const aiResponse = await fetchOpenAIResponse(message);
      setChats((prevChats) => ({
        ...prevChats,
        [currentChat!.toString()]: {
          ...prevChats[currentChat!.toString()],
          messages: [...prevChats[currentChat!.toString()].messages, `AI: ${aiResponse}`],
        },
      }));
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
    }
  };

  return (
    <div className="App">
      <TopBar />
      <div className="main-content">
        <Sidebar
          activeChat={activeChat}
          chats={Object.values(chats).map((chat, index) => ({ id: index, title: chat.title }))}
          onChatClick={handleChatClick}
          onNewChat={addNewChat}
        />
        <Chat
          messages={activeChat !== null ? chats[activeChat.toString()].messages : []}
          onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
