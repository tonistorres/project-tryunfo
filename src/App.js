import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arrayContainerLetter: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.onValidatioButton, this.validationCart);
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

      saveArrayContainerLetter = () => {
        const { arrayContainerLetter } = this.state;
        arrayContainerLetter.push(this.state);
      }

      clearState = () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          hasTrunfo: true,
          isSaveButtonDissabled: true,
        });
      }

      onSaveButtonClick = () => {
        this.saveArrayContainerLetter();
        this.clearState();
      }

      onClickDelete = (item, index) => {
        const { arrayContainerLetter } = this.state;
        const resultFilter = arrayContainerLetter.filter((item, i) => i !== index);
        this.setState({
          arrayContainerLetter: resultFilter,
        });
        if (item.cardTrunfo) {
          this.setState({
            hasTrunfo: false,
          });
        }
      }

      validationCart =() => {
        const { arrayContainerLetter } = this.state;
        const result = arrayContainerLetter.some((item) => item.cardTrunfo === true);
        if (result) {
          this.setState({
            hasTrunfo: true,
          });
        }
      }

      render() {
        const { arrayContainerLetter } = this.state;
        return (
          <div>
            <h1>Tryunfo</h1>
            <section className="App-style-form">
              <Form
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                { ...this.state }
              />
            </section>
            <section className="App-style-card">
              <Card { ...this.state } />
            </section>
            <section className="App-container-main-list">
              {arrayContainerLetter.map((item, index) => (
                <div key={ item.cardName } className="App-style-list">
                  <Card { ...item } />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.onClickDelete(item, index) }
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </section>
          </div>
        );
      }
}

export default App;
