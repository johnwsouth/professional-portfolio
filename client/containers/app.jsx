import React from 'react';
import AppContext from '../context';
import Head from '../components/head';
import CardContainer from '../containers/card-container';
import NavBar from '../containers/nav-bar';
import AboutMe from '../components/about-me';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headClicked: false,
      aboutMeClicked: false
    };
    this.renderSelector = this.renderSelector.bind(this);
    this.toggleHeadState = this.toggleHeadState.bind(this);
    this.toggleAboutMeState = this.toggleAboutMeState.bind(this);
  }

  toggleHeadState() {
    this.setState({ headClicked: !this.state.headClicked });
  }

  toggleAboutMeState() {
    this.setState({ aboutMeClicked: !this.state.aboutMeClicked });
  }

  renderSelector() {
    if (this.state.headClicked === false) {
      return (
        <Head />
      );
    } else {
      return (
          <>
          <Head />
          <NavBar />
          <CardContainer />
          {this.state.aboutMeClicked === true && <AboutMe />}
          </>
      );
    }
  }

  render() {
    var appContext = {
      toggleHeadState: this.toggleHeadState,
      toggleAboutMeState: this.toggleAboutMeState
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
