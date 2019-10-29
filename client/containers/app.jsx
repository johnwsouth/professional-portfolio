import React from 'react';
import AppContext from '../context';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      headState = 'unopened';
    }
  }

  render(){
    var appContext = {
      entries: this.state.entries,
      getAllEntries: this.getAllEntries,
      getTodaysEntries: this.getTodaysEntries,
      setCurrentTable: this.setCurrentTable,
      currentTable: this.state.currentTable,
      getDaySales: this.getDaySales
    };
  }

}
