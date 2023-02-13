import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
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

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// class ProductCard extends Component {
//   render() {
//     const { product } = this.props;
//     return (
//       <div
//         key={ product.id }
//         data-testid="product"
//       >
//         <p>{product.title}</p>
//         <p>
//           Preço R$:
//           {' '}
//           {product.price}
//         </p>
//         <img src={ product.thumbnail } alt={ product.title } />

//         <Link
//           to={ `/ProductDetail/${product.id}` }
//           id={ product.id }
//           data-testid="product-detail-link"
//         >
//           Details
//         </Link>
//       </div>
//     );
//   }
// }

// ProductCard.propTypes = ({
//   product: PropTypes.shape,
// }).isRequired;

// export default ProductCard;
