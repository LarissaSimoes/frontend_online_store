import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QueryForm extends Component {
  render() {
    const { inputValue, onInputChange, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            id="query-input"
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
          />
        </label>
        <button data-testid="query-button" type="submit">
          Pesquisar
        </button>
      </form>
    );
  }
}

QueryForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryForm;
