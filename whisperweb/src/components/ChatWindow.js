import React from 'react';
import Message from './Message';

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <Message sender="from">Lately, I've been feeling a bit overwhelmed with my family's expectations. Do you feel the same?</Message>
      <Message sender="to">Oh, I'm the youngest in my family. It's like I'm always in the shadow of my older siblings. They've set the bar so high, and everyone expects me to follow in their footsteps.</Message>
      
    </div>
  );
};

export default ChatWindow;