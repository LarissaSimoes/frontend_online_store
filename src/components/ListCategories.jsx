import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="listCategories">
        <form>
          <button data-testid="category" key={ id }>{name}</button>
        </form>
      </div>
    );
  }
}
ListCategories.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default ListCategories;
