import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = { cartProducts: [] };

  componentDidMount() {
    this.shoppingCart();
  }

  shoppingCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ cartProducts: cart });
  };

  render() {
    const { cartProducts } = this.state;
    const emptyCartElement = cartProducts.length === 0 && (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    const cartProductsElement = cartProducts.map((product, index) => (
      <li key={ index }>
        <h3 data-testid="shopping-cart-product-name">{ product.name }</h3>
        <img src={ product.image } alt={ product.name } />
        <h3>
          R$
          {product.value}
        </h3>
        <h3 data-testid="shopping-cart-product-quantity">{ product.qt }</h3>
      </li>
    ));
    return (
      <div>
        {emptyCartElement}
        <ul>
          {cartProductsElement}
        </ul>
      </div>
    );
  }
}

// Tentativa de correção de erro req 9
export default ShoppingCart;
