// NavigationBar.js

/*
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/information" className="nav-item" activeClassName="active">
        <img src="/images/information.png" alt="Information" className="nav-icon" />
      </Link>
      <Link to="/chats" className="nav-item" activeClassName="active">
        <img src="/images/chats.png" alt="Chats" className="nav-icon" />
      </Link>
      <Link to="/new-chat" className="nav-item" activeClassName="active">
        <img src="/images/new-chat-chosen.png" alt="New Chat" className="nav-icon" />
      </Link>
    </nav>
  );
};

export default NavBar;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InformationPage from './pages/InformationPage';
import ChatsPage from './pages/ChatsPage'; // Adjust the import based on your actual file structure
import NewChatPage from './pages/NewChatPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/information" component={InformationPage} />
        <Route path="/chats" component={ChatsPage} />
        <Route path="/new-chat" component={NewChatPage} />
      </Switch>
    </Router>
  );
}

export default App;