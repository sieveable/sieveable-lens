import React from 'react';

const FooterComponent = function footerComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">© 2015-{new Date().getFullYear()}
          <a href="http://lab.sikuli.org/"> Sikuli Lab</a>
        .</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
