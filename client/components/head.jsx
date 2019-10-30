import React from 'react';
import AppContext from '../context';

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headState: null
    };
  }

  render() {
    return (
      <div>I am the Head</div>
    );
  }
}

Head.contextType = AppContext;
