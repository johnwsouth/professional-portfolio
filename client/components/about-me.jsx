import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureOn: false
    };
  }

  render() {
    return (
      <div className = 'about-me-picture'></div>

    );
  }
}
