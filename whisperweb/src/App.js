import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatOverviewPage from './pages/ChatOverviewPage';
// import InformationPage from './pages/InformationPage';
// import NewChatPage from './pages/NewChatPage';
// import TopicsPage from './pages/TopicsPage';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" exact component={ChatOverviewPage} />
    //     <Route path="/information" component={InformationPage} />
    //     <Route path="/new-chat" component={NewChatPage} />
    //     <Route path="/topics" component={TopicsPage} />
    //   </Routes>
    // </Router>
    <ChatOverviewPage />
  );
}

export default App;
