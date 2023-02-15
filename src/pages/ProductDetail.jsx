import PropTypes from 'prop-types';
import React from 'react';
import AvaliationCard from '../components/AvaliationCard';
import { getProductById } from '../services/api';

class ProductDetail extends React.Component {
  state = {
    selectedProduct: [],
  };

  componentDidMount() {
    this.setSelectedProduct();
  }

  setSelectedProduct = async () => {
    const { match: { params: { id } } } = this.props;

    const product = await getProductById(id);
    this.setState({
      selectedProduct: product,
    });
  };

  onAddtoCartButton = () => {
    const { history } = this.props;

    history.push('/shopping-cart');
  };

  handleAddToCart = () => {
    const { selectedProduct: { title, thumbnail, price } } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: title, image: thumbnail, value: price, qt: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { selectedProduct: { title, thumbnail, price, id } } = this.state;

    return (
      <div>
        <p data-testid="product-detail-name">
          {title}
        </p>
        <img
          src={ thumbnail }
          alt={ title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{ price }</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleAddToCart }
        >
          Adicionar produto ao carrinho
        </button>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.onAddtoCartButton }
        >
          Carrinho de Compras
        </button>
        <AvaliationCard productId={ id } />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
