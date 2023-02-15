import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  buttonAdd = () => {
    const { product: { title, price, thumbnail } } = this.props;
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name: title, value: price, image: thumbnail, qtd: 1 });
    localStorage.setItem('products', JSON.stringify(products));
  };

  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/ProductDetail/${id}` }
          id={ id }
          data-testid="product-detail-link"
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <Link
          to="/shopping-cart"
          data-testid="product-add-to-cart"
        >
          <button
            id="addProductPrincipal"
            onClick={ this.buttonAdd }
            data-testid="product-add-to-cart"
          >
            Adicionar no Carrinho

          </button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
