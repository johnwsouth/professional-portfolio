import React from 'react';
import AppContext from '../context';
import VerticalNav from '../components/vertical-nav';
import TopNav from '../components/top-nav';
import LandingPage from './landing-page';
import MyProjects from './my-projects';
import AboutMe from './about-me';
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

  handleScroll(e) {
    var element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
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
          <div className='projects-page-title-container'>
            <div className='projects-page-title'><i className="fas fa-cogs" style={{ lineHeight: '-200%', fontSize: '3rem', paddingRight: '2vw', color: 'white' }}></i>My Projects</div>
          </div>
          <div className='page-2-projects'>
            <MyProjects/>
          </div>
        </div>
        <div className='page-3 page' name='page-2'>
          <div className='about-me-title'>About Me</div>
          <AboutMe/>
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
