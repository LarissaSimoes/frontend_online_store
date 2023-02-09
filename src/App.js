import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = { inputValue: '' };

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <label htmlFor="input-products">
          <input
            id="input-products"
            type="text"
            value={ inputValue }
            onChange={ this.onInputChange }
          />
        </label>
        {
          !inputValue && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
        }
      </div>
    );
  }
}
