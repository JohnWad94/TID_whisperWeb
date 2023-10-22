import React from 'react';
import Message from './Message';

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <Message sender="from">Love, I've been feeling a bit overwhelmed with my family's expectations. Do you feel the same?</Message>
      {/* Add more messages or use a mapping function to render messages */}
    </div>
  );
};

export default ChatWindow;