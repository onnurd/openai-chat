export const loadChats = (): { [key: string]: { title: string; messages: string[] } } => {
    const chats = localStorage.getItem('chats');
    return chats ? JSON.parse(chats) : {};
  };
  
  export const saveChats = (chats: { [key: string]: { title: string; messages: string[] } }): void => {
    localStorage.setItem('chats', JSON.stringify(chats));
  };
  