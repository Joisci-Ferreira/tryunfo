import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descrição">
          Descrição:
          <textarea
            data-testid="description-input"
            id="deccrição"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo1">
          Attr1:
          <input
            type="number"
            data-testid="attr1-input"
            id="atributo1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo2">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            id="atributo2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atributo3">
          Attr3:
          <input
            type="number"
            data-testid="attr3-input"
            id="atributo3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imagens">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            id="imagens"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade:
          <select
            data-testid="rare-input"
            id="rare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trybe Trunfo
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <input
                type="checkbox"
                data-testid="trunfo-input"
                id="super-trunfo"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />)}
        </label>

        <button
          type="button"
          data-testid="save-button"
          name="subimit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
