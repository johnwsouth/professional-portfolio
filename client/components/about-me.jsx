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
      <div className = 'about-me-container bounce-and-slide-in'>
        <div className = 'about-me-picture'></div>
        <div className='about-me-text'> &nbsp; &nbsp; My name is John South, and I have always loved to learn new things.
          Recently I have been exposed to  a profession that has satisfied this hunger. With the knowledge
          I have gained in JavaScript, extending outwards toward frameworks such as React and NodeJS,
           I can now build virtually anything. I am excited to continue learning with you.</div>
      </div>

    );
  }
}
