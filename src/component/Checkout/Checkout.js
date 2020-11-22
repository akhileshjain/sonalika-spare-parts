import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem/CartItem';
import CartItemPdf from '../CartItem-PDF/CartItem-PDF';
import './Checkout.css';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
class Checkout extends Component {
  downloadPDF = () => {
    const doc = new jsPDF({includeHiddenHtml: true});
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S');
    doc.text("Sonalika Spare Parts - Invoice", 80, 10);
    doc.autoTable({ html: '.tbl1', theme:'grid' });    
    // var file = doc.output('blob');
    // var pdfData = doc.output('datauristring');
    // var element = document.getElementById('pdfData');
    // element.href = "/pdf.html#" + pdfData;
    // element.target = "xxx";
    doc.save("a4.pdf");
    var file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    const fArray = [file];
    if (navigator.canShare && navigator.canShare({ files: fArray })) {
      navigator.share({
        title: 'Sonalika Spare Parts',
        text: 'Invoice',
        files: fArray
        // url: element.href
      })
    }
  }
  render() {
    // alert(navigator.canShare);
    return(
      <div className="print-cart">
        <table className="tbl1">
            <thead>
              <tr>
                <th>Item</th><th>Item Rate</th><th>Quantity</th><th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(item => {
              return <CartItemPdf name={item.name} 
                      rate={item.rate} qty={item.qty}>
                    </CartItemPdf>
            })}
            </tbody>
        </table>
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
        <div className="pdfShareBtn">
          <button onClick={() => this.downloadPDF()}>Download PDF</button>
        </div>
        {/* <a class="btn btn-default" id="pdfData" ref="/pdf.html" target="xxx">
        Download PDF2
        </a> */}
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