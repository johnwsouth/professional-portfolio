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
      <a href="" style = {{ color: 'white' }}>
        <div className= 'nav-link'>About Me</div>
      </a>
      <a href="" style={{ color: 'white' }}>
        <div className= 'nav-link'>GitHub</div>
      </a>
      <a href="" style={{ color: 'white' }}>
        <div className= 'nav-link' >Resume</div>
      </a>
    </div>);
  }
}
