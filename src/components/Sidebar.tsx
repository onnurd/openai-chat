import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  activeChat: number | null;
  chats: { id: number; title: string }[];
  onChatClick: (index: number) => void;
  onNewChat: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeChat, chats, onChatClick, onNewChat }) => {
  return (
    <div className="sidebar">
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={activeChat === chat.id ? 'active' : ''}
            onClick={() => onChatClick(chat.id)}
          >
            {chat.title}
          </li>
        ))}
      </ul>
      <button onClick={onNewChat}>Add New Chat</button>
    </div>
  );
};

export default Sidebar;
