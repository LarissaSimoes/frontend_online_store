import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductCard from './ProductCard';

class CartProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <button
          data-testid="remove-product"
          type="button"
        >
          Remover
        </button>
        <ProductCard product={ product } />
        <button
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <input type="number" value="1" min="1" />
        <button
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default CartProductCard;
