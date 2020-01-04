import React from 'react';
export default function LandingPage() {
  return (
    <div className='landing-page-title-container'>
      <div className='landing-page-title'><i className="fas fa-code code-icon"></i> Full Stack Developer, Designer
        <div className='landing-page-subtitle'> Simple code, beautiful applications </div>
      </div>
      <div className='smiling-emoji-container'>
        <img className='smiling-emoji' src="./images/emonji-smile-2.png" alt="no face" />
        <div className='smiling-emoji-backdrop'></div>
      </div>
      <img className='web-development-image' src="./images/webdevelopment.svg" alt="no image" />
    </div>
  );
}
