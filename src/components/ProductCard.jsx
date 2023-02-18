import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { saveProductToCart } from '../services/cartFunctions';

class ProductCard extends Component {
  onAddToCartClick = (product) => saveProductToCart(product);

  render() {
    const { titleId, imageId, priceId, buttonId, product } = this.props;
    const { title, thumbnail, price, id } = product;

    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <h4 data-testid={ titleId }>{ title }</h4>
          <img src={ thumbnail } alt={ title } data-testid={ imageId } />
          <h5 data-testid={ priceId }>{`R$ ${price}`}</h5>
        </Link>
        <button
          data-testid={ buttonId }
          hidden={ !buttonId } // Botão deve aparecer ou não
          type="button"
          onClick={ () => this.onAddToCartClick(product) }
        >
          Adicionar produto ao carrinho
        </button>
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
  titleId: PropTypes.string,
  imageId: PropTypes.string,
  priceId: PropTypes.string,
  buttonId: PropTypes.string,
};

ProductCard.defaultProps = { titleId: '', imageId: '', priceId: '', buttonId: '' };

export default ProductCard;
