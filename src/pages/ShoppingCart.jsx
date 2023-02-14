import React, { Component } from 'react';
// import CartProductCard from '../components/CartProductCard';

class ShoppingCart extends Component {
  state = { cartProducts: [] };

  componentDidMount() {
    this.shoppingCart();
  }

  shoppingCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ cartProducts: cart });
  };

  render() {
    const { cartProducts: { name, qt } } = this.state;

    const emptyCartElement = cartProducts.length === 0 && (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    const cartProductsElement = (
      <ul>
        {cartProducts.map((product) => (
          <li key={ product.id }>
            <h3 data-testid="shopping-cart-product-name">{ name }</h3>
            <h3 data-testid="shopping-cart-product-quantity">{ qt }</h3>
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
