import React from 'react';

const Message = ({ sender, children }) => {
  const className = `message ${sender}`;
  
  return <div className={className}>{children}</div>;
};

export default Message;
