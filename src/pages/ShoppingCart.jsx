import React, { Component } from 'react';
import CartProductCard from '../components/CartProductCard';

class ShoppingCart extends Component {
  state = { cartProducts: [] };

  render() {
    const { cartProducts } = this.state;

    const emptyCartElement = cartProducts.length === 0 && (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    const cartProductsElement = (
      <ul>
        {cartProducts.map((product) => (
          <li key={ product.id }>
            <CartProductCard key={ product.id } product={ product } />
          </li>
        ))}
      </ul>
    );

    return (
      <div>
        {emptyCartElement}
        {cartProductsElement}
      </div>
    );
  }
}

export default ShoppingCart;
