import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CategoryButton from './components/CategoryButton';
import ProductCard from './components/ProductCard';
import ShoppingCartBtn from './components/ShoppingCartBtn';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
  state = {
    inputValue: '',
    productsList: [],
    categories: [],
  };

  componentDidMount() {
    this.setCategories();
  }

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  setCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  handleButton = async () => {
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      productsList: products.results,
    });
  };

  onCategoryClick = async (categoryId) => {
    const products = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({ productsList: products.results });
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
            <CategoryButton
              key={ categorie.id }
              name={ categorie.name }
              type="button"
              onCategoryClick={ () => this.onCategoryClick(categorie.id) }
            />
          ))}
        </section>
      </div>
    );
  }
}
