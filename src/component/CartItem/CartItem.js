import React from 'react';
import './CartItem.css';

const cartItem = (props) => {
    return (
    <div className="cart-item-box">
        <div className="checkout-item-col">{props.name}</div>
        <div className="checkout-item-rate-col">Rs. {props.rate}</div>
        <div className="checkout-qty-col">{props.qty}</div>
        <div className="checkout-amount-col">Rs. {props.rate * props.qty}</div>
    </div>)
}

export default cartItem;