import React from 'react';
// import './CartItem.css';

const cartItemPdf = (props) => {
    return (
    <tr>
        <td>{props.name}</td>
        <td>Rs. {props.rate}</td>
        <td>{props.qty}</td>
        <td>Rs. {props.rate * props.qty}</td>
    </tr>)
}

export default cartItemPdf;