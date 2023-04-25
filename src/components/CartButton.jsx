import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  render() {
    const { cartTotal } = this.props;
    return (
      <button
        type="button"
      >
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de compras
          <span data-testid="shopping-cart-size">
            { cartTotal }
          </span>
        </Link>
      </button>
    );
  }
}

CartButton.propTypes = {
  cartTotal: PropTypes.number,
}.isRequired;

export default CartButton;
