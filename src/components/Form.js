import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input type="text" name="nome" id="nome" data-testid="name-input" />
        </label>

        <label htmlFor="descrição">
          Descrição:
          <textarea data-testid="description-input" name="descricao" id="deccrição" />
        </label>

        <label htmlFor="atributo1">
          Attr1:
          <input type="number" data-testid="attr1-input" name="attr1" id="atributo1" />
        </label>

        <label htmlFor="atributo2">
          Attr2:
          <input type="number" data-testid="attr2-input" name="attr2" id="atributo2" />
        </label>

        <label htmlFor="atributo3">
          Attr3:
          <input type="number" data-testid="attr3-input" name="attr3" id="atributo3" />
        </label>

        <label htmlFor="imagens">
          Imagem:
          <input type="text" data-testid="image-input" name="imagem" id="imagens" />
        </label>

        <label htmlFor="raridades">
          Raridade:
          <select data-testid="rare-input" name="raridade" id="raridades">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trybe Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trybe-trufo"
            id="super-trunfo"
          />
        </label>

        <button type="button" data-testid="save-button" name="salvar">Salvar</button>

      </form>
    );
  }
}

export default Form;
