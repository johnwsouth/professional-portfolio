import React from 'react';
import AppContext from '../context';

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.context.flipHeadState();
    this.setState({ headClicked: !this.state.headClicked });
  }

  cycleImages() {
    for (var index = 1; index < 15; index++) {
      var headElem = document.querySelector('.head');
      headElem.attr('background-image', 'url');
    }
  }

  render() {
    if (this.state.headClicked === false) {
      return (
        <>
          <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }} onClick = {this.handleClick}></div>
        <div className = 'head head-bg'></div>
        {/* <div className = 'firework-head firework-initial'></div> */}
        </>
      );
    } else {
      return (
        <>
        <div className='head'></div>
        {/* <div className='firework-head firework-clicked'></div> */}
        </>
      );
    }
  }
}

Head.contextType = AppContext;
