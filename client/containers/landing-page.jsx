import React from 'react';

export default class LandingPage extends React.Component {

  render() {
    return (
      <>
      <div className='landing-page-title-container'>
        <div className='landing-page-title'><i className="fas fa-code code-icon"></i> Full Stack Developer, Designer
          <div className='landing-page-subtitle'> Simple code, beautiful applications
            <div className='landing-page-contact'>phone: (714) 328 - 5441 <br/>
            email: im.john.south@gmail.com</div></div>
        </div>
        <div className='smiling-emoji-container'>
          <img className='smiling-emoji' src="./images/emonji-smile-2.png" alt="no face" />
          <div className='smiling-emoji-backdrop'></div>
        </div>
      </div>
        <img className='web-development-image' src="./images/webdevelopment.svg" alt="no image" />
      </>
    );
  }
}
