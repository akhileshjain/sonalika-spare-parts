import React from 'react';
import { Page, Text, View, Document, Note, ReactPDF } from '@react-pdf/renderer';
import {connect} from 'react-redux';
import './PDF.css'
// Create styles

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" orientation="portrait" className="page">
      <Note>H3llo</Note>
      <View className="rateslip-container">
      <div className="checkout-header">
          <div className="checkout-item-col">Item</div>
          <div className="checkout-item-rate-col">Item Rate</div>
          <div className="checkout-qty-col">Quantity</div>
          <div className="checkout-amount-col">Amount</div>
        </div>
        {props.cart.map(item => {
              return (<View className="rateslip">
                      <Text className="checkout-item-col">{item.name}</Text>
                      <Text className="checkout-item-rate-col">{item.rate}</Text>
                      <Text className="checkout-qty-col">{item.qty}</Text>
                      <Text className="checkout-amount-col">{item.rate * item.qty}</Text>
                      </View>
                    )
            })}
      </View>
    </Page>
  </Document>
);

const mapStateToProps = state => {
  console.log(state);
  return {
    cart : state.cart
  }
}
export default connect(mapStateToProps)(MyDocument);