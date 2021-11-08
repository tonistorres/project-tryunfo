import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.onValidatioButton);
  }

  onValidatioButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxNumber = 210;
    const numberFixed = 91;
    if (
      cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxNumber
      && (cardAttr1 < numberFixed && cardAttr2 < numberFixed && cardAttr3 < numberFixed)
      && (cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0)) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="App-style-form">
          <Form onInputChange={this.onInputChange} {...this.state} />
        </section>
        <section className="App-style-card">
          <Card {...this.state} />
        </section>
      </div>
    );
  }
}

export default App;
