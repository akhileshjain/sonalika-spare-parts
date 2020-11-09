import React, {Component} from 'react';
import './ItemDetails.css';

class ItemDetails extends Component {
    state = {
        qty: 0,
        selectedItemRate: null
    };
    qtyChangedHandler = (event) => {
        this.setState({qty: event.target.value});
        console.log(this.props.rate * event.target.value);
    }

    render() {
        return(
            <div>
                {/* {this.state.selectedItem} */}
                <form>
                    <div className="item-details-popup-line-box">
                        <label>Price per Item</label>
                        <input className="item-details-popup-inputs" disabled
                        value={this.props.rate}/>
                    </div>
                    <div className="item-details-popup-line-box">
                        <label>Quantity</label>
                        <input className="item-details-popup-inputs"
                        value={this.state.qty}
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
                    <div className="item-details-popup-line-box">
                        <button className="item-details-popup-buttons">ADD</button>
                        <button className="item-details-popup-buttons">CANCEL</button>
                        <button className="item-details-popup-buttons">CHECKOUT</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ItemDetails;