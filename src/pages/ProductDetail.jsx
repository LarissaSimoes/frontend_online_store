import PropTypes from 'prop-types';
import React from 'react';
import AvaliationCard from '../components/AvaliationCard';
import CartButton from '../components/CartButton';
import ProductCard from '../components/ProductCard';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';

class ProductDetail extends React.Component {
  state = { product: {}, isLoading: true };

  componentDidMount() {
    this.setProduct();
  }

  setProduct = async () => {
    const { match: { params: { id } } } = this.props;

    const product = await getProductById(id);
    this.setState({ product, isLoading: false });
  };

  render() {
    const { product, isLoading } = this.state;
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
        <CartButton />
        {Object.keys(product).length > 0 && <AvaliationCard productId={ product.id } />}
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
