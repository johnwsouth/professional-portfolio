import React from 'react';
import AppContext from '../context';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headOpened: false
    };
  }

  render() {
    return (<div className = 'nav-bar slide-down-nav'>
      <a href="https://www.github.com/johnwsouth" target='__blank' style={{ color: 'black' }}>
        <div className='nav-link'><i className="fab fa-github"></i> GitHub</div>
      </a>
      <a href="https://www.linkedin.com/in/john-south/" target='__blank' style={{ color: 'black' }}>
        <div className='nav-link'><i className="fab fa-linkedin"></i> LinkedIn</div>
      </a>
      <div className='nav-link' ><i className="fas fa-book"></i> Resume</div>
    </div>);
  }
}

NavBar.contextType = AppContext;
