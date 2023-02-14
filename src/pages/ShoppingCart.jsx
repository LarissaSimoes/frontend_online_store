import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = { cartProducts: [] };

  componentDidMount() {
    this.shoppingCart();
  }

  shoppingCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log();
    this.setState({ cartProducts: cart });
  };

  render() {
    const { cartProducts } = this.state;
    console.log(cartProducts);

    const emptyCartElement = cartProducts.length === 0 && (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    const cartProductsElement = (
      <ul>
        {cartProducts.map((product) => (
          <li key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">{ product.name }</h3>
            <h3 data-testid="shopping-cart-product-quantity">{ product.qt }</h3>
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
