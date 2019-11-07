import React from 'react';
import AppContext from '../context';

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headClicked: false,
      headDelay: true,
      currentHead: null,
      headTransitionArray: []
    };
    this.currentHeadIndex = 1;

    this.handleClick = this.handleClick.bind(this);
    this.generateHeadTransition = this.generateHeadTransition.bind(this);
    this.transitionHeads = this.transitionHeads.bind(this);
  }

  componentDidMount() {
    this.generateHeadTransition();
  }

  handleClick() {
    this.context.flipHeadState();
    this.setState({ headClicked: !this.state.headClicked });
    setTimeout(() => {
      this.transitionHeads();
    }, 2000);
  }

  generateHeadTransition() {
    var imagesArray = [];
    for (var i = 1; i < 15; i++) {
      imagesArray.push('head-open-' + i);
    }
    var images = imagesArray.map(image => {
      return (<div className='head' key={image} style={{ backgroundImage: `url('./images/${image}.png')` }}></div>);
    });

    this.setState({ headTransitionArray: images });
  }

  transitionHeads() {
    this.setState({ headDelay: false });
    var headTransInterval = setInterval(() => {
      this.setState({ currentHead: this.state.headTransitionArray[this.currentHeadIndex] });
      if (this.currentHeadIndex < 15) {
        this.currentHeadIndex += 1;
      } else {
        clearInterval(headTransInterval);
      }
    }, 100);
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
          {this.state.headDelay === true && <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }} onClick={this.handleClick}></div>}
        {this.currentHeadIndex < 15 ? this.state.currentHead : this.state.headTransitionArray[this.state.headTransitionArray.length - 1]}
          {/* <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }} onClick={this.handleClick}></div> */}
          {/* <div className='head' style={{ backgroundImage: "url('./images/head-initial.png')" }}></div> */}
        {/* <div className='firework-head firework-clicked'></div> */}
        </>
      );
    }
  }
}

Head.contextType = AppContext;
