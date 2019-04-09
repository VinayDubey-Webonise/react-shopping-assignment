import React, { Component } from 'react';

function PlaceOrder(props) {
    return ( 
        <form onSubmit={ props.submitUrl }>
            <input type="submit" value="Place Order"/>
        </form>
    );
}
