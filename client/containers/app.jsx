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
      currentPage: 12
    };
    this.onEnterViewport = this.onEnterViewport.bind(this);
    this.onExitViewport = this.onExitViewport.bind(this);

  }

  onEnterViewport(pageNum) {
    this.setState({
      currentPage: pageNum
    });
  }

  onExitViewport() {
    this.setState({
      currentPage: null
    });
  }

  componentDidMount() {
    scrollSpy.update();
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
            <div className='about-me-title'><i style={{ fontSize: '4vmax', marginRight: '1vmax' }} className="fas fa-male"></i> About Me</div>
            <AboutMe/>
          </div>

      </>

    );
  }

  render() {
    var appContext = {
      currentPage: this.state.currentPage
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
