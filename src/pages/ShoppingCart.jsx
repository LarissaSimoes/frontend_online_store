import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import ProductCard from '../components/ProductCard';
import {
  getCartProducts,
  removeProductFromCart,
  saveProductToCart,
} from '../services/cartFunctions';

class ShoppingCart extends Component {
  state = { cartProducts: [], cartTotal: 0 };

  componentDidMount() {
    this.setCartProducts();
  }

  setTotal = () => {
    const cartProducts = getCartProducts();
    const cartTotal = cartProducts.reduce((acc, cur) => acc + cur.quantity, 0);
    console.log(cartTotal);
    this.setState({ cartTotal });
  };

  setCartProducts = () => {
    const cartProducts = getCartProducts();
    this.setState({ cartProducts }, this.setTotal);
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
    const { cartProducts, cartTotal } = this.state;
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
        <CartButton
          cartTotal={ cartTotal }
        />
        {emptyCartElement}
        <ul>
          {cartProductsElement}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
