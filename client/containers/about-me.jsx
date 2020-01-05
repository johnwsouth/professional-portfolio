import React from 'react';

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <>
    <div className='about-me-container'>
      <div className='find-me-on'>Find me on: <br></br>
        <a className='about-me-label github-link' href="https://github.com/johnwsouth" target='__blank'>
          <i className="fab fa-github"></i> GitHub
        </a>
        <a className='about-me-label linkedin-link' href="https://linkedin.com/in/john-south" target='__blank'>
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <div className='resume-container'> Extra Info: <br></br>
          <a className='about-me-label resume-link' href="./resume.pdf" target='__blank'>
            <div className=''><i className="far fa-file-alt"></i> Resume</div>
          </a>
        </div>
      </div>

    </div>
    </>);

  }
}
