import React from 'react';
import AppContext from '../context';

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headClicked: false,
      headTransitionArray: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.generateHeadTransition = this.generateHeadTransition.bind(this);
  }

  componentDidMount() {
    this.generateHeadTransition();
  }

  handleClick() {
    this.context.flipHeadState();
    this.setState({ headClicked: !this.state.headClicked });
  }

  generateHeadTransition() {
    var imagesArray = [];
    for (var i = 1; i < 15; i++) {
      imagesArray.push('head-open-' + i);
    }
    var images = imagesArray.map(image => {
      return (<div className='head' key={image} style={{ backgroundImage: `url('./images/${image}.png')` }}></div>);
    });
    this.setState({ headTransitionArray: [images] });
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
          <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }} onClick={this.handleClick}></div>
          {/* <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }}></div> */}
        {/* <div className='firework-head firework-clicked'></div> */}
        </>
      );
    }
  }
}

Head.contextType = AppContext;
