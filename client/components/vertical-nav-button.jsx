import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; // eslint-disable-line

export default class VerticalNavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  handleClick() {
    scroller.scrollTo('page-' + this.props.number, {
      duration: 1500,
      delay: 100,
      smooth: 'easeInOutQuint'
    });
  }

  render() {
    return (
      <div
        name={'vertical-nav-' + this.props.number}
        className='vertical-page-nav-button'
        onClick={this.handleClick}
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleHover}>
        {this.state.isHovered === true &&
        <div className={'vertical-page-nav-button-text vertical-page-nav-button-text-' + this.props.number}>
          {this.props.label}
        </div>}
      </div>
    );
  }
}
