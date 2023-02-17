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
      cards: [],

    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cards, cardTrunfo } = this.state;
    const card = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, card],
    }));
    return cards;
  }

  validateTrunfo() {
    const { cards } = this.state;
    this.setState({
      hasTrunfo: cards.some(({ cardTrunfo }) => cardTrunfo),
    });
  }

  validateInputs() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === ''
    ) { return false; }
    return true;
  }

  validateAttributes() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxNumber = 90;
    const minNumber = 0;
    const maxSum = 210;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sum = attr1 + attr2 + attr3 > maxSum;
    if (
      sum
    || attr1 > maxNumber
    || attr2 > maxNumber
    || attr3 > maxNumber
    || attr1 < minNumber
    || attr2 < minNumber
    || attr3 < minNumber
    ) { return false; }
    return true;
  }

  validateButton() {
    const input = this.validateInputs();
    const attribute = this.validateAttributes();
    const buttonDisabled = input && attribute;
    this.setState({
      isSaveButtonDisabled: !buttonDisabled,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
    } = this.state;
    const { cards } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          {cards.map((card) => (
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              card={ card }
              key={ card.cardName }
            />
          ))}
        </div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
