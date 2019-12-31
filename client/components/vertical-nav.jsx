import React from 'react';

export default class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageLocation: null
    };
    this.createNavComponents = this.createNavComponents.bind(this);
  }

  createNavComponents() {
    var navTextArr = ['BookMaster', 'AdMe'];
    var navElementArr = [];
    for (var i = 0; i < 2; i++) {
      navElementArr.push(<div
        key={ 'vertical-nav-' + i }
        name={'vertical-nav-' + i}
        className='vertical-page-nav-button'>
        {navTextArr[i]}</div>);
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
