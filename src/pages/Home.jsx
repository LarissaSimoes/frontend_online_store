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

  switchLoading = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  };

  setProducts = (products) => {
    if (products.length > 0) {
      this.setState({ products, noProductFound: false });
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
    const searchData = await getProductsFromCategoryAndQuery('', inputValue);
    this.setProducts(searchData.results);
    this.switchLoading();
  };

  onCategoryClick = async (categoryId) => {
    this.switchLoading();
    const searchData = await getProductsFromCategoryAndQuery(categoryId);
    this.setProducts(searchData.results);
    this.switchLoading();
  };

  render() {
    const { inputValue, products, categories, noProductFound, isLoading } = this.state;

    const initialMessageElement = (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );

    const productListElement = (
      <section>
        {noProductFound && <h3>Nenhum produto foi encontrado</h3>}
        <ul>
          {products.map((product) => (
            <li key={ product.id }>
              <ProductCard key={ product.id } product={ product } />
            </li>
          ))}
        </ul>
      </section>
    );

    const categoriesElement = (
      <aside>
        <h3>Categorias</h3>
        {categories.map((category) => (
          <CategoryButton
            key={ category.id }
            name={ category.name }
            onCategoryClick={ () => this.onCategoryClick(category.id) }
          />
        ))}
      </aside>
    );

    return (
      <div className="App">
        {isLoading && <Loading />}
        <QueryForm
          inputValue={ inputValue }
          onInputChange={ this.onInputChange }
          handleSubmit={ this.handleSubmit }
        />
        {!inputValue && initialMessageElement}
        {productListElement}
        <ShoppingCartBtn />
        {categoriesElement}
      </div>
    );
  }
}
