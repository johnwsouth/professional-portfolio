import React from 'react';
import AppContext from '../context';


export default class Head extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      headState = this.appContext.headState;
    }
  }
}

Head.contextType = AppContext;
