import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho de compras
      </Link>
    );
  }
}

export default CartButton;
