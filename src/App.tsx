import React from 'react';
import './App.css';
import Chat from './components/Chat';
import TopBar from './components/TopBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <Chat />
    </div>
  );
}

export default App;
