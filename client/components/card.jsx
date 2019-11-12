import React from 'react';

export default function Card(props) {
  if (props.cardVisible === true) {
    return (

      <div className='card'></div>
    );
  } else {
    return (
      <div className="card-static">

      </div>
    );
  }
}
