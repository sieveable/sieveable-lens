import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppContainer = function appContainer(props) {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
AppContainer.propTypes = {
  children: PropTypes.node
};
export default AppContainer;
