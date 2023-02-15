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
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const { cartProducts } = this.state;

    // const emptyCartElement = cartProducts.length === 0 && (
    //   <h3 data-testid="shopping-cart-empty-message">
    //     Seu carrinho está vazio
    //   </h3>
    // );

    const cartProductsElement = cartProducts.map((product, index) => (
      <li key={ index }>
        <h3 data-testid="shopping-cart-product-name">{ product.name }</h3>
        <h3 data-testid="shopping-cart-product-quantity">{ product.qt }</h3>
        <img src={ product.image } alt={ product.name } />
        <h3>
          R$
          {product.value}
        </h3>
      </li>
    ));
    const productElement = products.map((product, index) => (
      <li key={ index }>
        <h2 data-testid="shopping-cart-product-name">{product.name}</h2>
        <img src={ product.image } alt={ product.name } />
        <h3>
          R$
          {product.value}
        </h3>
      </li>
    ));
    if (products.length === 0 || cartProducts.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <ul>
          <div>
            {productElement}
          </div>
          {cartProductsElement}
        </ul>
      </div>
    );
  }
}

// Tentativa de correção de erro req 9
export default ShoppingCart;
