import React from 'react';
import AppContext from '../context';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headOpened: false,
      aboutMeClicked: false
    };
  }

  render() {
    return (<div className = 'nav-bar slide-down-nav'>
      <div className= 'nav-link' onClick = {this.context.toggleAboutMeState}>About Me</div>
      <a href="https://www.github.com/johnwsouth" target='__blank' style={{ color: 'white' }}>
        <div className= 'nav-link'>GitHub</div>
      </a>
      <div className= 'nav-link' >Resume</div>
    </div>);
  }
}

NavBar.contextType = AppContext;
