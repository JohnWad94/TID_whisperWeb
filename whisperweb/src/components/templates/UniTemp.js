// A universal template to use throughout WhisperWeb

import React from 'react';
import Header from '../organisms/Header';
import ChatsWindow from '../organisms/ChatsWindow';
import NavigationBar from '../organisms/NavigationBar';
import Footer from '../organisms/Footer';

const UniTemp = ({ withNavigationBar }) => {
  return (
    <div className="universal-template">
      <Header />
      <ChatsWindow />
      {withNavigationBar && <NavigationBar />}
      <Footer />
    </div>
  );
};

export default UniTemp;