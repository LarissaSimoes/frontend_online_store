import PropTypes from 'prop-types';
import React from 'react';
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

  render() {
    const { selectedProduct } = this.state;
    const { title, thumbnail, price } = selectedProduct;

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
          type="button"
          data-testid="shopping-cart-button"
          onClick={ this.onAddtoCartButton }
        >
          Carrinho de Compras
        </button>
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
