// A universal template to use throughout WhisperWeb

import React from 'react';
import NavigationBar from '../organisms/NavBar';

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