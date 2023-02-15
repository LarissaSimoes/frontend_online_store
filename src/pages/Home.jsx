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
    } else {
      this.setState({ noProductFound: true });
    }
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

  handleAddToCart = (product) => {
    const { title, thumbnail, price } = product;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: title, image: thumbnail, value: price, qt: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
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
              <button
                data-testid="product-add-to-cart"
                onClick={ () => this.handleAddToCart(product) }
              >
                Adicionar
              </button>
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
        <ShoppingCartBtn />
        {categoriesElement}
        {productListElement}
      </div>
    );
  }
}
