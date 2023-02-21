import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import {
  getCartProducts,
  removeProductFromCart,
  saveProductToCart,
} from '../services/cartFunctions';

class ShoppingCart extends Component {
  state = { cartProducts: [] };

  componentDidMount() {
    this.setCartProducts();
  }

  setCartProducts = () => {
    const cartProducts = getCartProducts();
    this.setState({ cartProducts });
  };

  onIncreaseQuantityClick = (product) => {
    product.quantity += 1;
    saveProductToCart(product);
    this.setCartProducts();
  };

  onDecreaseQuantityClick = (product) => {
    if (product.quantity === 1) return;

    product.quantity -= 1;
    saveProductToCart(product);
    this.setCartProducts();
  };

  onRemoveClick = (product) => {
    removeProductFromCart(product);
    this.setCartProducts();
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
        <button
          data-testid="remove-product"
          type="button"
          onClick={ () => this.onRemoveClick(product) }
        >
          Remover
        </button>
        <ProductCard product={ product } titleId="shopping-cart-product-name" />
        <button
          data-testid="product-decrease-quantity"
          type="button"
          disabled={ product.quantity === 1 }
          onClick={ () => this.onDecreaseQuantityClick(product) }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{product.quantity}</span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.onIncreaseQuantityClick(product) }
        >
          +
        </button>
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

export default ShoppingCart;
