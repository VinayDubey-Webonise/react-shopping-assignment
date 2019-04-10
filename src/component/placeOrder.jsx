import React from 'react';
import PropTypes from 'prop-types';

export default function PlaceOrder(props) {
    return ( 
        <form onSubmit={ props.submitUrl }>
            <input type="submit" value="Place Order"/>
        </form>
    );
}

PlaceOrder.propTypes = {
    submitUrl: PropTypes.func
};