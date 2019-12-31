import React from 'react';
import AppContext from '../context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderSelector() {
    return (<div>I am your portfolio</div>);
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
