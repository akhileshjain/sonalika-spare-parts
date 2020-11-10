import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './ItemDetails.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class ItemDetails extends Component {
    state = {
        qty: 0,
        selectedItemRate: null
    };
    qtyChangedHandler = (event) => {
        this.setState({qty: event.target.value});
    }
    render() {
        return(
            <div>
                <div className="item-details-box-title">{this.props.title}</div>
                <form onSubmit={(event) => this.props.onAddToCart(event, this.props)}>
                    <div className="item-details-popup-line-box">
                        <label>Price per Item</label>
                        <input className="item-details-popup-inputs" disabled
                        value={this.props.rate}/>
                    </div>
                    <div className="item-details-popup-line-box">
                        <label>Quantity</label>
                        <input className="item-details-popup-inputs"
                        value={this.state.qty} type="number"
                        onChange={(event) => this.qtyChangedHandler(event)}/>
                    </div>
                    <div className="item-details-popup-line-box">
                        <label>Item Order Amount</label>
                        <input disabled className="item-details-popup-inputs"
                        value={this.props.rate * this.state.qty}
                        />
                    </div>
                    <div className="item-details-popup-line-box">
                        <label>Net Order Amount</label>
                        <input disabled className="item-details-popup-inputs"/>
                    </div>
                    <div className="item-details-popup-button-box">
                        <button type="submit" className="item-details-popup-buttons">ADD</button>
                        <button className="item-details-popup-buttons">CANCEL</button>
                    </div>
                </form>
                     <div className="item-details-checkout-box">
                         <button className="item-details-popup-buttons" onClick={(props) => this.props.onCartCheckout(this.props)}>CHECKOUT</button>
                     </div>
            </div>
        );
    }
}
// const mapStateToProps = props => {
//     return {
//         phone: state.phoneNo
//     };
// }
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (event, props) => {
            event.preventDefault();
            let addedItem = {"rate": props.rate, "qty": event.target[1].value, "name": props.title};
            console.log(addedItem);
            dispatch(actionTypes.AddItemToCart(addedItem));
            
        },
        onCartCheckout: (props) => {
            props.history.push('/checkout');
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ItemDetails));