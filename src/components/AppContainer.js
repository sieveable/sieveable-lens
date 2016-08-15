import React from 'react';
import Header from './Header';
import App from './App';

const AppContainer = function app() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <App />
      </div>
    </div>
    );
};

export default AppContainer;
