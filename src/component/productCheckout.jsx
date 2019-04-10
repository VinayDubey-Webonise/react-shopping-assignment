import React from 'react';
import PropTypes from 'prop-types';

function ProductCheckout(props) {
  return (
    <form onSubmit={ props.submitUrl }>
      <input type="submit" value="Submit"/>
    </form>
    );
}

ProductCheckout.propTypes = {
  submitUrl: PropTypes.func
};

export default ProductCheckout;