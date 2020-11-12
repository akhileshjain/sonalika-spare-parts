import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import './Checkout.css';
import MyDocument from '../PDF/PDF';
import ReactPDF from '@react-pdf/renderer';
import {PDFDownloadLink} from '@react-pdf/renderer';  
class Checkout extends Component {
  downloadPDF = () => {
    console.log("hello");
  }
  render() {
    return(
      <div>

        <div>
          <button onClick={() => this.downloadPDF()}>Share</button>
        </div>
        <div className="checkout-header">
          <div className="checkout-item-col">Item</div>
          <div className="checkout-item-rate-col">Item Rate</div>
          <div className="checkout-qty-col">Quantity</div>
          <div className="checkout-amount-col">Amount</div>
        </div>
        {this.props.cart.map(item => {
            return <CartItem name={item.name} 
                    rate={item.rate} qty={item.qty}>
                  </CartItem>
          })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    cart : state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);