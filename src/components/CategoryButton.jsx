import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CategoryButton extends Component {
  render() {
    const { onCategoryClick, name } = this.props;
    return (
      <button
        data-testid="category"
        type="button"
        onClick={ onCategoryClick }
      >
        {name}
      </button>
    );
  }
}

CategoryButton.propTypes = {
  name: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryButton;
