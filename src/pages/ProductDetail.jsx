import PropTypes from 'prop-types';
import React from 'react';
import AvaliationCard from '../components/AvaliationCard';
import ProductCard from '../components/ProductCard';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';
import CartButton from '../components/CartButton';
import { getCartProducts } from '../services/cartFunctions';

class ProductDetail extends React.Component {
  state = { product: {}, isLoading: true, cartTotal: 0 };

  componentDidMount() {
    this.setProduct();
  }

  setTotal = () => {
    const cartProducts = getCartProducts();
    const cartTotal = cartProducts.reduce((acc, cur) => acc + cur.quantity, 0);
    this.setState({ cartTotal });
  };

  setProduct = async () => {
    const { match: { params: { id } } } = this.props;

    const product = await getProductById(id);
    this.setState({ product, isLoading: false }, this.setTotal);
  };

  render() {
    const { product, isLoading, cartTotal } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : (
          <ProductCard
            titleId="product-detail-name"
            imageId="product-detail-image"
            priceId="product-detail-price"
            buttonId="product-detail-add-to-cart"
            product={ product }
          />
        )}
        {Object.keys(product).length > 0 && <AvaliationCard productId={ product.id } />}
        <CartButton
          cartTotal={ cartTotal }
        />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
