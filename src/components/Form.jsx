import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form-style" onSubmit={ this.onSubmit }>
        <label htmlFor="nome">
          Nome da Carta:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="estadoFavorito">
          Descrição da Carta:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="att1">
          Attbr1:
          <input
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            type="number"
          />
        </label>
        <label htmlFor="att2">
          Attbr2:
          <input
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            type="number"
          />
        </label>
        <label htmlFor="att3">
          Attbr3:
          <input
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            type="number"
          />
        </label>
        <label htmlFor="nome">
          Imagem:
          <input
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="superTriunfo">
          A carta é super Triunfo?
          <input
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            type="checkbox"
          />
        </label>
        <div>
          <button
            type="reset"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
