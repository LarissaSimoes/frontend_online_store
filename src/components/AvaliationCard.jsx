import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AvaliationCard extends Component {
  state = {
    comment: '',
    email: '',
    errorMessage: '',
    rating: 0,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  buttonClick = () => {
    const { comment, email, rating } = this.state;
    const { productId } = this.props;
    if (email.length === 0 || rating < 1) {
      this.setState({
        errorMessage: true,
      });
    } else {
      const evaluation = { email, text: comment, rating };
      const rateInfo = JSON.parse(localStorage.getItem(productId) || '[]');
      rateInfo.push(evaluation);
      localStorage.setItem(productId, JSON.stringify(rateInfo));
      this.setState({
        comment: '',
        email: '',
        errorMessage: false,
        rating: false,
      });
    }
  };

  showForm = () => {
    const { productId } = this.props;
    const rateInfo = JSON.parse(localStorage.getItem(productId) || '[]');
    return (
      rateInfo.map((evaluation) => (
        <div key={ evaluation.email }>
          <p data-testid="review-card-email">{evaluation.email}</p>
          <p data-testid="review-card-evaluation">{evaluation.text}</p>
          <p data-testid="review-card-rating">{evaluation.rating}</p>
        </div>
      ))
    );
  };

  // https://www.geeksforgeeks.org/how-to-validate-email-address-without-using-regular-expression-in-javascript/?ref=rp

  // var atSymbol = emailAddress.indexOf("@");
  //           var dotSymbol = emailAddress.lastIndexOf(".");
  //           var spaceSymbol = emailAddress.indexOf(" ");

  //           if ((atSymbol != -1) &&
  //               (atSymbol != 0) &&
  //               (dotSymbol != -1) &&
  //               (dotSymbol != 0) &&
  //               (dotSymbol > atSymbol + 1) &&
  //               (emailAddress.length > dotSymbol + 1) &&
  //               (spaceSymbol == -1)) {
  //               alert("Email address is valid.");
  //               return true;
  //           } else {
  //               alert("Error !!! Email address is not valid.");
  //               return false;
  //           }

  render() {
    const { email, errorMessage, comment } = this.state;
    return (
      <div>
        <form>
          <h1>Avaliações</h1>
          <input
            name="email"
            type="email"
            data-testid="product-detail-email"
            value={ email }
            required
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <label>
            1
            <input
              name="rating"
              type="radio"
              id="rate-field-1"
              data-testid="1-rating"
              value="1"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            2
            <input
              name="rating"
              type="radio"
              id="rate-field-2"
              data-testid="2-rating"
              value="2"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            3
            <input
              name="rating"
              type="radio"
              id="rate-field-3"
              data-testid="3-rating"
              value="3"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            4
            <input
              name="rating"
              type="radio"
              id="rate-field-4"
              data-testid="4-rating"
              value="4"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            5
            <input
              name="rating"
              type="radio"
              id="rate-field-5"
              data-testid="5-rating"
              value="5"
              onChange={ this.handleChange }
              required
            />
          </label>
          <textarea
            name="comment"
            data-testid="product-detail-evaluation"
            value={ comment }
            placeholder="Mensagem(opcional)"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.buttonClick }
          >
            Avaliar
          </button>
          { (errorMessage) && <p data-testid="error-msg">Campos inválidos</p>}
        </form>
        {this.showForm()}
      </div>

    );
  }
}

AvaliationCard.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default AvaliationCard;
