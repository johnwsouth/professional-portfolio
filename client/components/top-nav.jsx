import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; // eslint-disable-line

function handleClick(number) {
  scroller.scrollTo('page-' + number, {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutQuint'
  });
}

function TopNavButton(props) {
  return (
    <Element className={'top-nav-button top-nav-button-' + props.number} onClick={() => { handleClick(props.number); }}>
      {'PAGE ' + props.number}
    </Element>
  );
}

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOption: null
    };
    this.renderTopNavButton = this.renderTopNavButton.bind(this);
  }

  renderTopNavButton() {
    var topNavComponents = [];
    for (var i = 0; i < 3; i++) {
      topNavComponents.push(<TopNavButton key= {Math.random() * i} number={i}></TopNavButton>);
    }
    return topNavComponents;
  }

  render() {
    var topNavComponents = this.renderTopNavButton();
    return (<div className='top-nav-container'>
      {topNavComponents}
    </div>);
  }

}
