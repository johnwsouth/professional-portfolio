import React from 'react';
import AppContext from '../context';
import VerticalNav from '../components/vertical-nav';
import TopNav from '../components/top-nav';
import LandingPage from './landing-page';
import MyProjects from './my-projects';
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
    scroller.scrollTo('page-2', {
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
      <TopNav/>
        <div className='landing-page page' name='page-0'>
          <LandingPage/>
        </div>
        <div className='page-2 page' name='page-1' >
          <MyProjects/>
        </div>
        <div className='page-3 page' name='page-2'>

        </div>

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
