import React from 'react';
import Card from '../components/card';

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardVisible: false
    };
    this.delayCard = this.delayCard.bind(this);
  }

  componentDidMount() {
    this.delayCard();
  }

  delayCard() {
    setTimeout(() => {
      this.setState({ cardVisible: true });
    }, 5000);
  }

  render() {
    if (this.state.cardVisible === true) {
      return (
        <div className='card-container'>
          <Card />
        </div>
      );
    } else {
      return (
        <div className="card-container"></div>
      );
    }

  }
}
