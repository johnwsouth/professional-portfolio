import React from 'react';
import AppContext from '../context';
import VerticalNav from '../components/vertical-nav';
import * as Scroll from 'react-scroll'; // eslint-disable-line
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; // eslint-disable-line

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    scrollSpy.update();
  }

  scrollToSecondContainer() {
    scroller.scrollTo('second-container', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50 }
    );
  }

  renderSelector() {
    return (
      <>
      <VerticalNav/>
        <div name='first-container'style={{ width: '100vw', height: '100vh' }}onClick={() => {
          this.scrollToSecondContainer();
        }}> I am the first view</div>
        <div name='second-container' style={{ width: '100vw', height: '100vh' }} onClick={() => {
        }}> I am the second view</div>
      </>

    );
  }

  render() {
    var appContext = {
      something: this.something
    };

    var returnedComponents = this.renderSelector();

    return (
      <AppContext.Provider value={appContext}>
        {returnedComponents}
      </AppContext.Provider>
    );
  }

}

App.contextType = AppContext;
