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

  render() {
    if (this.state.headClicked === false) {
      return (
        <>
        <div className = 'head' onClick = {this.handleClick}></div>
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
