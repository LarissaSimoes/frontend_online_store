import React, { Component } from 'react';
import './App.css';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductCard from './components/ProductCard';

export default class App extends Component {
  state = {
    inputValue: '',
    productsList: [],
  };

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleButton = async () => {
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      productsList: products.results,
    });
  };

  render() {
    const { inputValue, productsList } = this.state;
    return (
      <div className="App">
        <label htmlFor="input-products">
          <input
            data-testid="query-input"
            id="input-products"
            type="text"
            value={ inputValue }
            onChange={ this.onInputChange }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleButton }
        >
          Pesquisar
        </button>
        {
          !inputValue && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
        }
        <div>
          { productsList.length > 0
            ? productsList.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
              />
            )) : <h3>Nenhum produto foi encontrado</h3>}
        </div>
      </div>
    );
  }
}
