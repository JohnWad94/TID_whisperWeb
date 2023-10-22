import React from 'react';
import './styles/styles.css';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ChatWindow />
        <ChatInput />
      </main>
      <NavigationBar />
    </div>
  );
}

export default App;