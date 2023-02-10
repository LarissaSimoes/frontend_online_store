import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartBtn extends Component {
  render() {
    return (
      <div id="shopping-cart-button">
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

export default ShoppingCartBtn;
