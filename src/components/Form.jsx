import React from 'react';
import '../App.css';

class Form extends React.Component {
  render() {
    return (
      <form className="form-style">
        <label htmlFor="nome">
          Nome da Carta:
          <input data-testid="name-input" name="nome" type="text" />
        </label>
        <label htmlFor="estadoFavorito">
          Descrição da Carta:
          <textarea data-testid="description-input" name="descricaoCarta" />
        </label>
        <label htmlFor="att1">
          Attbr1:
          <input data-testid="attr1-input" name="att1" type="number" />
        </label>
        <label htmlFor="att2">
          Attbr2:
          <input data-testid="attr2-input" name="att2" type="number" />
        </label>
        <label htmlFor="att3">
          Attbr3:
          <input data-testid="attr3-input" name="att3" type="number" />
        </label>
        <label htmlFor="nome">
          Imagem:
          <input data-testid="image-input" name="nome" type="text" />
        </label>
        <label htmlFor="raridadeDaCarta">
          Raridade:
          <select data-testid="rare-input" name="raridadeDaCarta">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="superTriunfo">
          A carta é super Triunfo?
          <input data-testid="trunfo-input" name="superTriunfo" type="checkbox" />
        </label>
        <input data-testid="save-button" type="submit" value="Salvar" />
      </form>
    );
  }
}

export default Form;
