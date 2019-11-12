import React from 'react';

export default function Card(props) {
  var cardPathArr = ['./images/bookMaster.png', './images/adMe.png'];
  if (props.cardVisible === true) {
    return (
      <>
        <div className='card' style={{ backgroundImage: 'url(' + cardPathArr[0] + ')' }}>
          <a href="http://dev.bookmaster.johnwsouth.com" target="__blank" style={{ fontSize: '2000%', color: 'rgba(0,0,0,0)' }}>a</a>
        </div>
        <div className='card' style={{ backgroundImage: 'url(' + cardPathArr[1] + ')' }}>
          <a href="https://adme.sairafe.com" target="__blank" style={{ fontSize: '2000%', color: 'rgba(0,0,0,0)' }}>a</a>

        </div>

      </>
    );
  } else {
    return (
      <div className="card-static">

      </div>
    );
  }
}
