import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; // eslint-disable-line
import AppContext from '../context';

export default class VerticalNavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isCurrentPage: null
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var pageBool = this.context.currentPage === this.props.number;
    this.setState({ isCurrentPage: pageBool });
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
        className={`vertical-page-nav-button ${this.state.isCurrentPage === true ? 'vertical-page-nav-button-selected' : ''}`}
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

VerticalNavButton.contextType = AppContext;
