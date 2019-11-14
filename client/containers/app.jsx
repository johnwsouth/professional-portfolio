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
      headClicked: false
    };
    this.renderSelector = this.renderSelector.bind(this);
    this.flipHeadState = this.flipHeadState.bind(this);
  }

  flipHeadState() {
    this.setState({ headClicked: !this.state.headClicked });
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
          <AboutMe />
          </>
      );
    }
  }

  render() {
    var appContext = {
      flipHeadState: this.flipHeadState
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
