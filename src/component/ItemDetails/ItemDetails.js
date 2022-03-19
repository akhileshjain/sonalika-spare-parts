import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './ItemDetails.css';
// import Modal from '../UI/Modal/Modal';
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
    closeModalDialog = (e) => {
        e.preventDefault();
        this.props.onCloseDialog();
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
                        value={this.state.qty} type="number" min="0"
                        onChange={(event) => this.qtyChangedHandler(event)}/>
                    </div>
                    <div className="item-details-popup-line-box">
                        <label>Item Order Amount</label>
                        <input disabled className="item-details-popup-inputs"
                        value={'Rs.'+ this.props.rate * this.state.qty}
                        />
                    </div>
                    {/* <div className="item-details-popup-line-box">
                        <label>Net Order Amount</label>
                        <input disabled className="item-details-popup-inputs"/>
                    </div> */}
                    <div className="item-details-popup-button-box">
                        <button type="submit" className="item-details-popup-buttons">ADD</button>
                        <button className="item-details-popup-buttons" 
                        onClick={(event) => this.closeModalDialog(event)}>CANCEL</button>
                    </div>
                </form>
                     <div className="item-details-checkout-box">
                         <button className="item-details-popup-buttons" 
                         onClick={(event) => this.props.onCartCheckout(event, this.props)}>CHECKOUT</button>
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
            if(event.target[1].value !== '0') {
                let addedItem = {"rate": props.rate, "qty": event.target[1].value, "name": props.title};
                dispatch(actionTypes.AddItemToCart(addedItem));         
            }
            props.onCloseDialog();  
        },
        onCartCheckout: (event, props) => {
            event.preventDefault();
            if(document.getElementsByClassName('item-details-popup-inputs')[1].value !== '0') {
                let addedItem = {"rate": props.rate, "qty": document.getElementsByClassName('item-details-popup-inputs')[1].value, "name": props.title};
                dispatch(actionTypes.AddItemToCart(addedItem));         
            }
            props.onCloseDialog();  
            props.history.push('/checkout');
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ItemDetails));