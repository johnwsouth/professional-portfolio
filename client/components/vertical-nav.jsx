import React from 'react';
import VerticalNavButton from './vertical-nav-button';

export default class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageLocation: null
    };
    this.createNavComponents = this.createNavComponents.bind(this);
  }

  createNavComponents() {
    var navTextArr = ['Page 1', 'Page 2', 'Page 3'];
    var navElementArr = [];
    for (var i = 0; i < 3; i++) {
      navElementArr.push(<VerticalNavButton key={Math.random() * i} number={i} label = {navTextArr[i]}/>);
    }
    return navElementArr;
  }

  render() {
    var navComponents = this.createNavComponents();
    return (
      <div className = 'nav-container'>
        {navComponents}
      </div>
    );
  }
}
