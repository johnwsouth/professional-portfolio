import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headOpened: false
    };
  }

  render() {
    return (<div className = 'nav-bar slide-down-nav'>
      <div className= 'nav-link'>About Me</div>
      <div className= 'nav-link'>GitHub</div>
      <div className= 'nav-link' >Resume</div>
    </div>);
  }
}
