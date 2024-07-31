import React from 'react';
import './App.css';
import Chat from './components/Chat';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="main-content">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
