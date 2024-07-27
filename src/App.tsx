import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Chat from './components/Chat';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <Chat />
    </div>
  );
}

export default App;
