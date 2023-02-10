import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from './services/api';
import ProductCard from './components/ProductCard';
import ShoppingCart from './pages/ShoppingCart';
import ShoppingCartBtn from './components/ShoppingCartBtn';
import ListCategories from './components/ListCategories';

export default class App extends Component {
  state = {
    inputValue: '',
    productsList: [],
    categories: [],
  };

  componentDidMount() {
    this.categories();
  }

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  categories = async () => {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  };

  handleButton = async () => {
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      productsList: products.results,
    });
  };

  render() {
    const { inputValue, productsList, categories } = this.state;
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
        <div>
          <Switch>
            <Route exact path="/shopping-cart" component={ ShoppingCart } />
          </Switch>
        </div>
        <ShoppingCartBtn />
        <h2>Categorias</h2>
        <section>
          {categories.map((categorie) => (
            <ListCategories
              data-testid="category"
              id={ categorie.id }
              name={ categorie.name }
              key={ categorie.id }
            />
          ))}
        </section>
      </div>
    );
  }
}
