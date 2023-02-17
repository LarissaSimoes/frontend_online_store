import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import { getCartProducts } from '../services/cartFunctions';

class Cart extends Component {
  state = { cartProducts: [] };

  componentDidMount() {
    this.setCartProducts();
  }

  setCartProducts = () => {
    const cartProducts = getCartProducts();
    this.setState({ cartProducts });
  };

  render() {
    const { cartProducts } = this.state;
    const emptyCartElement = cartProducts.length === 0 && (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    const cartProductsElement = cartProducts.length > 0 && cartProducts.map((product) => (
      <li key={ product.id }>
        <ProductCard
          product={ product }
          titleId="shopping-cart-product-name"
        />
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
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

export default Cart;
