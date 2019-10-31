import React from 'react';
import AppContext from '../context';

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headState: 'initial'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ headState: 'isClicked' });
  }

  render() {
    if (this.state.headState === 'initial') {
      return (
        <>
        <div className = 'head ' onClick = {this.handleClick}></div>
        <div className = 'firework-head firework-initial'></div>
        </>
      );
    } else {
      return (
        <>
        <div className = 'head'></div>
        <div className='firework-head firework-clicked'></div>
        </>
      );
    }
  }
}

Head.contextType = AppContext;
