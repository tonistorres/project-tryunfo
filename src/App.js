import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App-style">
        <h1>Tryunfo</h1>
        <Form
          cardName="a"
          cardDescription="a"
          cardAttr1="a"
          cardAttr2="a"
          cardAttr3="a"
          cardImage="a"
          cardRare="a"
          cardTrunfo={ false }
          // hasTrunfo,
          isSaveButtonDisabled={ false }
          onInputChange={ () => 'ab' }
          onSaveButtonClick={ () => 'ab' }
        />
        <Card
          cardName="a"
          cardDescription="a"
          cardAttr1="a"
          cardAttr2="a"
          cardAttr3="a"
          cardImage="a"
          cardRare="a"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
