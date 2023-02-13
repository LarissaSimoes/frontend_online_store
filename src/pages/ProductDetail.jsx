import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductDetail extends React.Component {
  state = {
    selectedProduct: [],
  };

  componentDidMount() {
    const { id: { match: { param } } } = this.props;
    this.getProductById(param.id);
  }

  getProductById = async (productId) => {
    const response = await getProductById(productId);
    this.setState({
      selectedProduct: response,
    });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div>
        <p data-testid="product-detail-name">
          {selectedProduct.title}
        </p>
        <img
          src={ selectedProduct.thumbnail }
          alt={ selectedProduct.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{selectedProduct.price}</p>

        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  id: PropTypes.shape({
    match: PropTypes.shape({
      param: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetail;
