import React from 'react';
import AppContext from '../context';
import Head from '../components/head';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headState: 'unopened'
    };
  }

  render() {
    var appContext = {
      entries: this.state.entries,
      getAllEntries: this.getAllEntries,
      getTodaysEntries: this.getTodaysEntries,
      setCurrentTable: this.setCurrentTable,
      currentTable: this.state.currentTable,
      getDaySales: this.getDaySales
    };

    return (
      <AppContext.Provider value={appContext}>
        <Head />
      </AppContext.Provider>
    );
  }

}

App.contextType = AppContext;
