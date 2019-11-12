import React from 'react';

export default function Card(props) {
  var cardPathArr = ['./images/bookMaster.png', './images/adMe.png'];
  if (props.cardVisible === true) {
    return (
      <>
        <div className='card move' style={{ backgroundImage: 'url(' + cardPathArr[0] + ')' }}></div>
        <div className='card move move' style={{ backgroundImage: 'url(' + cardPathArr[1] + ')' }}></div>
      </>
    );
  } else {
    return (
      <div className="card-static slide-down-static">

      </div>
    );
  }
}
