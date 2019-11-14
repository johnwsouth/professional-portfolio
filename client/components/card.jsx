import React from 'react';

export default function Card(props) {
  var cardPathArr = ['./images/bookMaster.png', './images/adMe.png'];
  if (props.cardVisible === true) {
    return (
      <>
        <a href="http://dev.bookmaster.johnwsouth.com" target="__blank" style={{ height: '0' }}>
          <div className='card move' style={{ backgroundImage: 'url(' + cardPathArr[0] + ')' }}></div>
        </a>
        <a href="https://adme.sairafe.com" target="__blank" style={{ height: '0' }}>
          <div className='card move' style={{ backgroundImage: 'url(' + cardPathArr[1] + ')' }}></div>
        </a>
      </>
    );
  } else {
    return (<div className="card-static slide-down-static">

    </div>);
  }
}
