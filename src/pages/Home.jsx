import React, { Component } from 'react';
import CategoryButton from '../components/CategoryButton';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import QueryForm from '../components/QueryForm';
import ShoppingCartBtn from '../components/ShoppingCartBtn';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    inputValue: '',
    products: [],
    categories: [],
    noProductFound: false,
    isLoading: false,
  };

  componentDidMount() {
    this.setCategories();
  }

  onInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  setProducts = (products) => {
    if (products.length > 0) {
      this.setState({ noProductFound: false });
    } else this.setState({ noProductFound: true });

    this.setState({ products, isLoading: false });
  };

  setCategories = async () => {
    this.setState({ isLoading: true });
    const categories = await getCategories();
    this.setState({ categories, isLoading: false });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { inputValue } = this.state;
    const searchData = await getProductsFromCategoryAndQuery('', inputValue);
    this.setProducts(searchData.results);
  };

  onCategoryClick = async (categoryId) => {
    this.setState({ isLoading: true });
    const searchData = await getProductsFromCategoryAndQuery(categoryId);
    this.setProducts(searchData.results);
  };

  render() {
    const { inputValue, products, categories, noProductFound, isLoading } = this.state;

    const initialMessageElement = (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );

    const productListElement = products.length > 0 && products.map((product) => (
      <li key={ product.id }>
        <ProductCard
          key={ product.id }
          product={ product }
          buttonId="product-add-to-cart"
        />
      </li>
    ));

    const categoriesElement = categories.map(({ id, name }) => (
      <CategoryButton
        key={ id }
        name={ name }
        onCategoryClick={ () => this.onCategoryClick(id) }
      />
    ));

    return (
      <div className="App">
        {isLoading && <Loading />}
        <QueryForm
          inputValue={ inputValue }
          onInputChange={ this.onInputChange }
          handleSubmit={ this.handleSubmit }
        />
        {!inputValue && initialMessageElement}
        <ShoppingCartBtn />
        <aside>
          <h3>Categorias</h3>
          {categoriesElement}
        </aside>
        <ul>{productListElement}</ul>
        {noProductFound && <h3>Nenhum produto foi encontrado</h3>}
      </div>
    );
  }
}
