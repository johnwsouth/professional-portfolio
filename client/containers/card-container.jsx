import React from 'react';
import Card from '../components/card';

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardVisible: false,
      titleMoved: false
    };
    this.delayCard = this.delayCard.bind(this);
    this.delayTitle = this.delayTitle.bind(this);
  }

  componentDidMount() {
    this.delayCard();
    this.delayTitle();
  }

  delayCard() {
    setTimeout(() => {
      this.setState({ cardVisible: true });
    }, 5000);
  }

  delayTitle() {
    setTimeout(() => {
      this.setState({ titleMoved: true });
    }, 7200);
  }

  render() {
    if (this.state.cardVisible === true && this.state.titleMoved === false) {
      return (
        <>
        <div className='card-container'>
          <div className='my-projects slide-in'> My Projects </div>
          <Card cardVisible={true}/>
        </div>
        </>
      );
    } else if (this.state.cardVisible === true && this.state.titleMoved === true) {
      return (
        <>
          <div className='card-container'>
            <div className = 'project-title-container hover' style= {{ animationDuration: '2s' }}>
              <div className='my-projects bounce-project-title'> My Projects </div>
            </div>
            <Card cardVisible={true} />
          </div>
        </>
      );
    } else {
      return (
        <>
        <div className="card-container">
          <Card cardVisible={false}></Card>
        </div>
        </>
      );
    }

  }
}
