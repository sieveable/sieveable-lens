import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class HeaderComponent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeClassName: 'home'
    };
    this.setActiveClassName = this.setActiveClassName.bind(this);
  }
  setActiveClassName(value) {
    this.setState({ activeClassName: value });
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button" className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <IndexLink
              onClick={() => this.setActiveClassName('home')}
              className="navbar-brand" to="/"
            >Sieveable for Android</IndexLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li
                onClick={() => this.setActiveClassName('ui')}
                className={(this.state.activeClassName === 'ui') ? 'active' : ''}
              >
                <Link to="/ui">UI & Design
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                onClick={() => this.setActiveClassName('dev')}
                className={(this.state.activeClassName === 'dev') ? 'active' : ''}
              >
                <Link to="/dev">Dev & Tools</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default HeaderComponent;
