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
    productList: [],
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

  switchLoading = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  };

  setProductList = (products) => {
    if (products.results.length > 0) {
      this.setState({ productList: products.results, noProductFound: false });
      return;
    }
    this.setState({ noProductFound: true });
  };

  setCategories = async () => {
    this.switchLoading();
    const categories = await getCategories();
    this.setState({ categories });
    this.switchLoading();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.switchLoading();
    const { inputValue } = this.state;
    const products = await getProductsFromCategoryAndQuery('', inputValue);
    this.setProductList(products);
    this.switchLoading();
  };

  onCategoryClick = async (categoryId) => {
    this.switchLoading();
    const products = await getProductsFromCategoryAndQuery(categoryId);
    this.setProductList(products);
    this.switchLoading();
  };

  render() {
    const { inputValue, productList, categories, noProductFound, isLoading } = this.state;
    return (
      <div className="App">
        {isLoading && <Loading />}
        <QueryForm
          inputValue={ inputValue }
          onInputChange={ this.onInputChange }
          handleSubmit={ this.handleSubmit }
        />
        { !inputValue && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) }
        <ul>
          { productList.map((product) => (
            <li key={ product.id }>
              <ProductCard key={ product.id } product={ product } />
            </li>
          )) }
          {noProductFound && <h3>Nenhum produto foi encontrado</h3>}
        </ul>
        <ShoppingCartBtn />
        <h3>Categorias</h3>
        <aside>
          { categories.map((category) => (
            <CategoryButton
              key={ category.id }
              name={ category.name }
              onCategoryClick={ () => this.onCategoryClick(category.id) }
            />
          )) }
        </aside>
      </div>
    );
  }
}
